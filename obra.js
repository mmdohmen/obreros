// datos
const datosObras = obras.data
console.log("obras: ", datosObras)

// capturo el id de la URL
const urlParams = window.location.search
console.log("url params:" , urlParams)
const params = new URLSearchParams(urlParams)
console.log("params:", params)
const id = params.get("id")
console.log("id:", id)

const obra = datosObras.find(elemento => elemento.id == id)
console.log("obra:", obra)

// cargo los DATOS del EVENTO
document.getElementById("imagenObra").setAttribute("src",`./img/${obra.imagen}`)
document.getElementById("nombreObra").innerText = obra.nombre
document.getElementById("requisitosObra").innerText = obra.requisitos
document.getElementById("remuneracionObra").innerText = obra.remuneracion
document.getElementById("presentarseObra").innerText = obra.presentarse
document.getElementById("horarioObra").innerText = obra.horario
document.getElementById("contactoObra").innerText = obra.contacto
document.getElementById("movilObra").innerText = obra.movil
document.getElementById("direccionObra").innerText = obra.direccion
document.getElementById("aclaracionesObra").innerText = obra.aclaraciones
document.getElementById("mapaObra").setAttribute("src",`${obra.mapa}`)