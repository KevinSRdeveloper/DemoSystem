const formSystem = document.querySelector("#formSystem");

formSystem.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/kevin.davidtt@gmail.com", {
        method: "POST",
        headers: {
            "Accept": "application/json" // Asegura que la respuesta sea en JSON
        },
        body: new FormData(e.target)
    })
    .then(res => {
        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
        return res.json();
    })
    .then(json => {
        Swal.fire({
            title: "Gracias hemos recibido su mensaje",
            icon: "success"
          });
    })
    .catch(err => {
        console.error("Fetch error:", err);
    });
});
