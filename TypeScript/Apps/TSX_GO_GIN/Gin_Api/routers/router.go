package routers

import (
	"Gin_Api/controllers"
	"Gin_Api/middleware"

	"github.com/gin-gonic/gin"
)

func Home(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "pong",
	})
}

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/", Home)
	auth := r.Group("/auth")
	{

		auth.POST("/register", controllers.Register)
		auth.POST("/login", controllers.Login)
		auth.POST("/logout", controllers.Logout)
	}

	protected := r.Group("/user")
	protected.Use(middleware.AuthMiddleware())
	{
		protected.GET("/profile", controllers.GetUserProfile)
	}

	return r
}
