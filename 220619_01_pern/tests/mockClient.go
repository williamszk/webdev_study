// https://blog.logrocket.com/making-http-requests-in-go/
package main

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {

	func() {
		// we need to import from net/http from the standard library
		url := "http://localhost:5000/todos"
		resp, err := http.Get(url)
		if err != nil {
			log.Fatalln(err)
		}
		// fmt.Println(resp)
		// the resp contains lots of information
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			log.Fatalln(err)
		}

		sb := string(body)

		log.Println("1. Response from the GET request of all todo items")
		log.Println(sb)
	}()

	func() {

		postBody, _ := json.Marshal(map[string]string{
			"description": "I need to study Go",
		})

		respBody := bytes.NewBuffer(postBody)

		// fmt.Printf("%v, %T\n", respBody, respBody) // *bytes.Buffer

		url := "http://localhost:5000/todos"
		contentType := "application/json"

		resp, err := http.Post(url, contentType, respBody)
		if err != nil {
			log.Fatalln(err)
		}

		defer resp.Body.Close()

		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			log.Fatalln(err)
		}

		sb := string(body)

		log.Println("2. Response from the POST request")
		log.Println(sb)
	}()

	// func() {
	// 	url := "http://localhost:5000/todos/2"
	// 	resp, err := http.Get(url)
	// 	if err != nil {
	// 		log.Fatalln(err)
	// 	}

	// 	body, err := ioutil.ReadAll(resp.Body)
	// 	if err != nil {
	// 		log.Fatalln(err)
	// 	}

	// 	sb := string(body)

	// 	log.Println("3. Response from the GET request for 1 specific item")
	// 	log.Println(sb)
	// }()
}
