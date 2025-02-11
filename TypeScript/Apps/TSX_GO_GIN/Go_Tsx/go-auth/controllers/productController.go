package controllers

import (
	"github.com/gofiber/fiber/v2"
	"go-auth/database"
	"go-auth/modles"
)

// get all product
func GetProducts(c *fiber.Ctx) error {
	var products []modles.Product
	database.DB.Find(&products)
	return c.JSON(products)
}

// Get product by id
func GetProductById(c *fiber.Ctx) error {
	id := c.Params("id")
	var product modles.Product
	if err := database.DB.First(&product, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Product not found",
		})
	}
	return c.JSON(product)
}

// Create product
func CreateProduct(c *fiber.Ctx) error {
	var product modles.Product
	if err := c.BodyParser(&product); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": err.Error(),
		})
	}
	database.DB.Create(&product)
	return c.JSON(fiber.Map{
		"message": "Product created",
		"data":    product,
	})

}

// update product
func UpdateProduct(c *fiber.Ctx) error {
	id := c.Params("id")
	var product modles.Product
	if err := database.DB.First(&product, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Product not found",
		})
	}
	if err := c.BodyParser(&product); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": err.Error(),
		})
	}
	database.DB.Save(&product)
	return c.JSON(fiber.Map{
		"message": "Product updated",
		"data":    product,
	})
}

// delete product
func DeleteProduct(c *fiber.Ctx) error {
	id := c.Params("id")
	var product modles.Product
	if err := database.DB.First(&product, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Product not found",
		})
	}
	database.DB.Delete(&product)
	return c.JSON(fiber.Map{
		"message": "Product deleted",
	})
}
