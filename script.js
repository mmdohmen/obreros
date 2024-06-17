function obras (categoria) {
    console.log (categoria);
    let url = 'obras.html?categoria=' + categoria;
    window.location.href = url;
}

function obra() {
    let url = 'obra.html';
    window.location.href = url;
}