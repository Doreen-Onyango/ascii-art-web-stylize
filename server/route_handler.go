package stylize

import (
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

const (
	basePath     = ".."
	templatesDir = "templates"
)

func Handl(w http.ResponseWriter, r *http.Request) {
	switch r.URL.Path {
	case "/":
		renderTemplate(w, "index.html")
	case "/styles.css":
		serveStaticFile(w, r, "styles.css")
	case "/about.html":
		serveStaticFile(w, r, "about.html")
	case "/about.css":
		serveStaticFile(w, r, "about.css")
	case "/error.css":
		serveStaticFile(w, r, "error.css")
	default:
		renderTemplate(w, "error.html")
	}
}

func renderTemplate(w http.ResponseWriter, templateName string) {
	path := filepath.Join(basePath, templatesDir, templateName)
	tmpl, err := template.ParseFiles(path)
	if err != nil {
		log.Printf("Error parsing template %s: %v", templateName, err)
		if templateName != "error.html" {
			renderTemplate(w, "error.html")
		} else {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		}
		return
	}
	if err := tmpl.Execute(w, nil); err != nil {
		log.Printf("Error executing template %s: %v", templateName, err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
	}
}

func serveStaticFile(w http.ResponseWriter, r *http.Request, filename string) {
	filePath := filepath.Join(basePath, templatesDir, filename)
	http.ServeFile(w, r, filePath)
}
