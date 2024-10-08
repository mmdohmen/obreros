function proveedores (categoria) {
    console.log (categoria);
    let url = 'proveedores.html?categoria=' + categoria;
    window.location.href = url;
}