// datos
const datosObras = obras.data
console.log(datosObras)


// capturo al contenedor del DOM
const eventosDOM = document.getElementById("obras")

// llamo a la funcion
cards(datosObras)

// FUNCIONES   ================================================================================================================================
function cards(arrayDatos) {
    if (arrayDatos.length == 0) {
        eventosDOM.innerHTML = ""
        Swal.fire('there are NO EVENTS with the text entered ...').then(resultado => {
            if (resultado.value) { window.location.reload() }
        })
    }
    let cards = ""
    arrayDatos.forEach(element => {
        cards += `
        <div class="row obra" >
            <div class="col-4">
                <img src="./img/${element.imagen}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-8">
                <p><mark>${element.nombre}</mark> </p>
                <p>localidad: <b>${element.localidad}</b></p>
                <p><small>calle: <i>${element.direccion}</i></small></p>
                <div class="row">
                <div class="col-7"></div>
                <div class="col-1">
                <a href="obra.html?id=${element.id}" class="btn btn-outline-secondary btn-sm">detalles</a> 
                </div>
                </div>
            </div>
        </div>
        `
    });
    eventosDOM.innerHTML = cards
}


