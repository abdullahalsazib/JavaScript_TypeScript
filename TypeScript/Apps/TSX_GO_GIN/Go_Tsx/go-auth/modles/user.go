package modles

type User struct {
	Id             uint   `json:"id"`
	Name           string `json:"name"`
	Email          string `gorm:"unique"`
	Password       []byte `json:"-"`
	ProfilePicture string `json:"profile_picture, omitempty"`
}

type Product struct {
	ID       uint   `json:"id" gorm:"primary_key"`
	Name     string `json:"name"`
	Desc     string `json:"desc"`
	Price    uint   `json:"price"`
	Stock    uint   `json:"stock"`
	ImageUrl string `json:"image_url"`
}
