package modles

type User struct {
	Id             uint   `json:"id"`
	Name           string `json:"name"`
	Email          string `gorm:"unique"`
	Password       []byte `json:"-"`
	ProfilePicture string `json:"profile_picture, omitempty"`
}
