// capturo el id de la URL
const urlParams = window.location.search
console.log("url params:", urlParams)
const params = new URLSearchParams(urlParams)
console.log("params:", params)
const id = params.get("id")
console.log("id:", id)


// datos locales =================================================================================
//const datosObras = obras.data
//onsole.log("datosObras: ", datosObras)


// datos web =====================================================================================
url = "https://raw.githubusercontent.com/mmdohmen/obreros/main/obras.json"

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(obras => {
        console.log(obras);
        // Aquí puedes trabajar con los datos del JSON
        console.log(typeof (obras))
        console.warn('obras.data: ', obras.data)
        console.log(typeof (obras))

        const datosObras = obras.data
        const obra = datosObras.find(elemento => elemento.id == id)
        console.log("obra:", obra)

        // cargo los DATOS del EVENTO
        document.getElementById("imagenObra").setAttribute("src", `./img/${obra.imagen}`)
        document.getElementById("nombreObra").innerText = obra.nombre
        document.getElementById("requisitosObra").innerText = obra.requisitos
        document.getElementById("remuneracionObra").innerText = obra.remuneracion
        document.getElementById("presentarseObra").innerText = obra.presentarse
        document.getElementById("horarioObra").innerText = obra.horario
        document.getElementById("contactoObra").innerText = obra.contacto
        document.getElementById("movilObra").innerText = obra.movil
        document.getElementById("direccionObra").innerText = obra.direccion
        document.getElementById("aclaracionesObra").innerText = obra.aclaraciones
        document.getElementById("mapaObra").setAttribute("src", `${obra.mapa}`)

    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });




