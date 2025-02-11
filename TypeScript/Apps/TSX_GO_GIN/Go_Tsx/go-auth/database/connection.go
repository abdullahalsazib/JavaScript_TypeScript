package database

import (
	"go-auth/modles"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
)

var DB *gorm.DB

func Connection() {
	dsn := "root:newpassword@tcp(127.0.0.1:3306)/userDB?charset=utf8mb4&parseTime=True&loc=Local"
	conDB, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("error connecting to database", err)
	}

	DB = conDB

	if err := conDB.AutoMigrate(&modles.User{}); err != nil {
		log.Fatal("Auto Migrate Failed User", err)
	}

	if err := conDB.AutoMigrate(&modles.Product{}); err != nil {
		log.Fatal("Auto Migrate Failed Product", err)
	}

}
