package stylize

import (
	"html/template"
	"net/http"
	"path/filepath"
)

func Handl(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path == "/" {
		path := filepath.Join("..", "templates", "index.html")
		tmpl, err := template.ParseFiles(path)
		if err != nil {
			path := filepath.Join("..", "templates", "error.html")
			tmpl, err := template.ParseFiles(path)
			if err == nil {
				w.WriteHeader(http.StatusNotFound)
			}
			tmpl.Execute(w, nil)
			return
		}

		if err := tmpl.Execute(w, nil); err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}
	} else if r.URL.Path == "/styles.css" {
		cssPath := filepath.Join("..", "templates", "styles.css")
		http.ServeFile(w, r, cssPath)
	} else if r.URL.Path == "/about.html" {
		about := filepath.Join("..", "templates", "about.html")
		http.ServeFile(w, r, about)
	} else if r.URL.Path == "/about.css" {
		about := filepath.Join("..", "templates", "about.css")
		http.ServeFile(w, r, about)
	} else if r.URL.Path == "/error.css" {
		about := filepath.Join("..", "templates", "error.css")
		http.ServeFile(w, r, about)
	} else {
		path := filepath.Join("..", "templates", "error.html")
		tmpl, err := template.ParseFiles(path)
		if err == nil {
			w.WriteHeader(http.StatusNotFound)
		}
		tmpl.Execute(w, nil)
	}
}
