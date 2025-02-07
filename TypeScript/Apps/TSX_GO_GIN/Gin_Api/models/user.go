package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id       uint   `json:"id"`
	Name     string `json:"name"`
	Email    string `gorm:"unique" json:"email"`
	Password []byte `json:"-"`
}
