package main

import (
	"Gin_Api/Database"
	"Gin_Api/routers"
	"log"
)

var PORT = ":8080"

func main() {
	Database.ConnectDB()

	app := routers.SetupRouter()

	log.Println("Server is running on port ", PORT)
	app.Run(PORT)
}
