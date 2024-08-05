package stylize

import (
	"fmt"
	"net/http"
	"time"

	send "stylize/utils"
)

func Download(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	if err := r.ParseForm(); err != nil {
		send.SendError(w, fmt.Sprintf("ParseForm() %v", err), http.StatusBadRequest)
		return
	}

	text := r.FormValue("Text")
	banner := r.FormValue("Banner")

	if banner == "" || text == "" {
		send.SendError(w, "Error 400 Bad request: nothing is specified", http.StatusBadRequest)
		return
	}

	var asciiArt string
	if banner == "all" {
		for _, bn := range []string{"standard", "thinkertoy", "shadow"} {
			asciiArt += writeAscii(w, bn, text) + "\n"
		}
	} else {
		asciiArt = writeAscii(w, banner, text)
	}
	currentYear := time.Now().Year()

	cr := fmt.Sprintf("© %d By Doreen [github.com/Doreen-Onyango], Hussein [github.com/kherldhussein], Tomlee [github.com/Tomlee-abila]. All rights reserved.\n\n", currentYear)
	w.Header().Set("Content-Disposition", "attachment; filename=ascii_art.txt")
	w.Header().Set("Content-Type", "text/plain")
	w.Write([]byte(cr + asciiArt))
}
