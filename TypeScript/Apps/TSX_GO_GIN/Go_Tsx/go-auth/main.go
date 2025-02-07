package main

import (
	"go-auth/database"
	"go-auth/routes"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func init() {
	database.Connection()
}
func main() {

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",
		AllowCredentials: true,
	}))

	routes.Setup(app)
	log.Fatal(app.Listen(":8000"))
}
