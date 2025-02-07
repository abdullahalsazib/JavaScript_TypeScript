package routes

import (
	"go-auth/controllers"

	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controllers.Register)
	app.Post("/api/login", controllers.Login)
	app.Get("/api/user", controllers.User)
	app.Post("/api/logout", controllers.Logout)
	app.Get("/api/test", controllers.TestApi)
	app.Post("/api/update", controllers.UpdateProfile)
	app.Get("/api/profile", controllers.GetUserProfile)

	// Serve uploaded images
	app.Static("/uploads", "./uploads")
}
