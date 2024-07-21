package stylize

import (
	"html/template"
	"net/http"
	"path/filepath"

	send "stylize/utils"
)

func Handl(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}
	path := filepath.Join("..", "templates", "index.html")
	tmpl, err := template.ParseFiles(path)
	if err != nil {
		send.SendError(w, "Error 404: PAGE NOT FOUND", http.StatusNotFound)
		return
	}

	if err := tmpl.Execute(w, nil); err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
}
