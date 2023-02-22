package client

import (
	"encoding/json"
	"log"
	"net/http"

	"example.com/crypto/model"
)

func FetchCrypto(fiat string, crypto string) (string, error) {
	// build the url string
	URL := "https://api.nomics.com/v1/currencies/ticker?key=3990ec554a414b59dd85d29b2286dd85&interval=1d&ids=" + crypto + "&convert=" + fiat
	// URL := "...currencies/ticker?key=3990ec554a414b59dd85d29b2286dd85&interval=1d&ids="+crypto+"&convert="+fiat

	// HTTP request using the Get function
	resp, err := http.Get(URL)
	if err != nil {
		log.Fatal("An error occurred please try again.")
	}

	defer resp.Body.Close()

	var cResp model.Cryptoresponse

	if err := json.NewDecoder(resp.Body).Decode(&cResp); err != nil {
		log.Fatal("An error occurred please try again.")
	}

	return cResp.TextOutput(), nil
}
