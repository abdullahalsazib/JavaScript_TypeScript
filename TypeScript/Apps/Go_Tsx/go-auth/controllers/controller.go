package controllers

import (
	"go-auth/database"
	"go-auth/modles"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

const secretKey = "secret"

func TestApi(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "Hello, World! Api is running",
	})
}

func Register(c *fiber.Ctx) error {
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		return err
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	user := modles.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: password,
	}

	database.DB.Create(&user)

	return c.JSON(user)
}

func Login(c *fiber.Ctx) error {
	var data map[string]string
	if err := c.BodyParser(&data); err != nil {
		return err
	}

	var user modles.User

	database.DB.Where("email = ?", data["email"]).First(&user)
	if user.Id == 0 {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message": "User not found",
		})
	}

	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message": "Incorrect password",
		})
	}

	claim := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"issuer": strconv.Itoa(int(user.Id)),
		"exp":    time.Now().Add(time.Hour * 24).Unix(),
	})

	token, err := claim.SignedString([]byte(secretKey))
	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "couldn't login",
		})
	}

	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)
	return c.JSON(fiber.Map{
		"message": "Success",
	})
}

func User(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	if cookie == "" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"message": "unauthorized"})
	}

	// Parse the JWT token
	token, err := jwt.ParseWithClaims(cookie, &jwt.MapClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(secretKey), nil
	})

	// Check for token parsing errors
	if err != nil || !token.Valid {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"message": "unauthorized"})
	}

	// Extract claims safely
	claims, ok := token.Claims.(*jwt.MapClaims)
	if !ok || claims == nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"message": "invalid token"})
	}

	// Get user ID from the claim (ensure the correct key is used)
	userID, exists := (*claims)["issuer"].(string) // or the correct key for user ID
	if !exists {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"message": "invalid token claims"})
	}

	// Fetch user from the database
	var user modles.User
	result := database.DB.Where("id = ?", userID).First(&user)
	if result.Error != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"message": "user not found"})
	}

	// Return user data
	return c.JSON(user)
}

func Logout(c *fiber.Ctx) error {
	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}
	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "Success",
	})
}
