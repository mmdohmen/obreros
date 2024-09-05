function obras (categoria) {
    console.log (categoria);
    let url = 'obras.html?categoria=' + categoria;
    window.location.href = url;
}

function obra() {
    let url = 'obra.html';
    window.location.href = url;
}

url = "https://raw.githubusercontent.com/mmdohmen/obreros/main/data.js"

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Aquí puedes trabajar con los datos del JSON
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
