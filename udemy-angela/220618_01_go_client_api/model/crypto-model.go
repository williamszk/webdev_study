package model

import "fmt"

// Cryptoresponse is an array of structs
type Cryptoresponse []struct {
	Name              string `json:"name"`
	Price             string `json:"price"`
	Rank              string `json:"rank"`
	High              string `json:"high"`
	CirculatingSupply string `json:"circulating_supply"`
}

// `` this is called string literal, I think that we can pass
// interpolated string inside of it
// and the information inside the string literal is called
// a tag, it tells Go what is the name of the key when it is converted
// to Go

func (c Cryptoresponse) TextOutput() string {
	p := fmt.Sprintf("Name: %s\nPrice: %s\nRank: %s\nHigh: %s\nCirculatingSupply: %s\n",
		c[0].Name, c[0].Price, c[0].Rank, c[0].High, c[0].CirculatingSupply)

	return p
}
