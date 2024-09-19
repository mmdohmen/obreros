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

// capturo los checkboxs de ZONAS
const zonas = document.getElementById("zonas")
console.error('zonas:', zonas)

// CAPTURO todos los CHECKBOX en una NodeList() o coleccion de NODOS (objetos)
// capturar los checkbox
let checkboxes = document.querySelectorAll("input[type='checkbox']")
console.log('checkboxes: ', checkboxes)
// TRANSFORMO la NodeList() en un ARRAY
let arrayCheckboxes = Array.from(checkboxes)
console.log("array de checkboxes:", arrayCheckboxes)


// DATOS locales =================================================================================
//console.warn("datos LOCALES:   obras.data")
//const datosObras = obras.data
//console.log("datosObras: ", datosObras)
//console.log(typeof (datosObras))

// llamo a la funcion
//cards(datosObras)



// DATOS web =====================================================================================
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
    console.log('obras WEB: ', obras);
    // Aquí puedes trabajar con los datos del JSON
    console.log(typeof (obras))
    console.warn('obras.data: ', obras.data)
    console.log(typeof (obras.data))

    let arrayObras = obras.data
    console.log('obras: ', arrayObras)

    // FILTRO los objetos segun la CATEGORIA "categoria" elegida
    // uso filter() para: iterar sobre cada objeto en el array 'arrayDatos'
    //     some()         verificar si al menos uno de los elementos del array categorias es igual a "categoria"
    let arrayObrasFiltradoCategoria = arrayObras.filter(item => item.categorias.some(cat => cat === categoria))
    console.log('obras filtradas x categoria: ', arrayObrasFiltradoCategoria)
    cards(arrayObrasFiltradoCategoria)

    // habilito un EVENTO que muestre las obras segun su ZONA => coloco un eventlistener
    //    dentro del 'eventListener':   1. modifico el array de obras segun las zonas seleccionadas
    //                                  2. renderizo el array de obras por zona
    zonas.addEventListener('change', () => {
      let checkboxesCheckeados = arrayCheckboxes.filter(elemento => elemento.checked)
      console.log("checkboxes Checkeados:", checkboxesCheckeados)

      // si NO HAY elementos CHECKED renderizo todas las obras
      if (checkboxesCheckeados.length == 0) {
        cards(arrayObrasFiltradoCategoria)
      }

      if (checkboxesCheckeados.length != 0) {
        console.log('aplicar FILTRO x zona')
        // armo un ARRAY con el NOMBRE/value de las ZONAS q estan CHECKED
        let zonasCheckeadas = checkboxesCheckeados.map(elemento => elemento.value)
        console.log("ZONAS Checkeadas:", zonasCheckeadas)
        // armo el ARRAY de DATOS que tienen las ZONAS CHECKEaDas
        arrayDatos = arrayObrasFiltradoCategoria.filter(elemento => zonasCheckeadas.includes(elemento.zona))
        console.log("obras segun zona: ", arrayDatos)
        cards(arrayDatos)
      }

    })

  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });



// FUNCIONES   ============================================================================================
function cards(arrayDatos) {

  console.warn("cards")

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




