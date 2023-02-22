// https://blog.logrocket.com/making-http-requests-in-go/
package main

import (
	"flag"
	"fmt"
	"log"

	"example.com/crypto/client"
)

func main() {
	// flag is used to pass optional arguments to go
	// like a command line utility
	fiatCurrency := flag.String(
		"fiat", "USD", "The name of the fiat currency you would like to know the price of your crypto in",
	)

	nameOfCrypto := flag.String(
		"crypto", "BTC", "Input the name of the CryptoCurrency you would like to know the price of",
	)

	flag.Parse()

	crypto, err := client.FetchCrypto(*fiatCurrency, *nameOfCrypto)
	if err != nil {
		log.Println(err)
	}

	fmt.Println(crypto)
}

// go run main.go -fiat=EUR -crypto=ETH
