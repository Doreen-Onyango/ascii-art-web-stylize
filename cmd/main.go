package main

import (
	"log"
	"net/http"
	"os"

	server "stylize/server"
)

func main() {
	if len(os.Args) != 1 {
		log.Fatal("Usage: go run main.go")
		return
	}
	http.HandleFunc("/", server.Handl)
	http.HandleFunc("/ascii-art", server.AsciiServer)
	http.HandleFunc("/ascii-art/download", server.Download)

	log.Println("Server listening on http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Error Running Server: %v ", err)
	}
}
