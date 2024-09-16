// capturo la CATEGORIA de la URL
const urlParams = window.location.search
console.log("url params:", urlParams)
const params = new URLSearchParams(urlParams)
console.log("params:", params)
const categoria = params.get("categoria")
console.warn("categoria:", categoria)

const h1categoria = document.getElementById("categoria")
h1categoria.innerText = categoria.toUpperCase()


// capturo al contenedor del DOM
const eventosDOM = document.getElementById("obras")


// datos locales =================================================================================
console.log("datos LOCALES:   obras.data")
const datosObras = obras.data
console.log("datosObras: ", datosObras)
console.log(typeof (datosObras))

// llamo a la funcion
//cards(datosObras)


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
    console.error("datos WEB:   obras.json")
    console.log(obras);
    // Aquí puedes trabajar con los datos del JSON
    console.log(typeof (obras))
    console.warn('obras.data: ', obras.data)
    console.log(typeof (obras))

    cards(obras.data)

  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });



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
    //if (element.categorias == categoria)}
    if (element.categorias.some(cat => cat == categoria)) {
      console.log("if funcionando", categoria)
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
    }
  });
  eventosDOM.innerHTML = cards
}


