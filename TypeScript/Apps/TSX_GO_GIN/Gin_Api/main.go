package main

import (
	"Gin_Api/Database"
	"Gin_Api/routers"
	"log"

	"github.com/gin-contrib/cors"
)

var PORT = ":8080"

func main() {
	Database.ConnectDB()

	app := routers.SetupRouter()
	app.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},                   // Add your frontend origin here
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}, // Allowed HTTP methods
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"}, // Allowed headers
		AllowCredentials: true,                                                // Allow credentials (cookies, authorization headers)
	}))
	log.Println("Server is running on port ", PORT)
	app.Run(PORT)
}
