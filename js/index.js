// PUNTO 2 --- HEADER Y FOOTER //



let formulario = document.querySelector('.search-form');
let inputBusqueda = document.querySelector('.search-input');

formulario.addEventListener('submit', function(e){

    e.preventDefault();

    if(inputBusqueda.value === ""){
        return alert("El campo de búsqueda no puede estar vacío");
    } 
    if(inputBusqueda.value.length < 3){
        return alert("El término debe tener al menos 3 caracteres");
    } 
    
    localStorage.setItem("ultimaBusqueda", inputBusqueda.value);
    this.submit();
});























// URL base de la API
const BASE_URL = "https://dummyjson.com/products";

// 1) Capturamos los contenedores donde vamos a inyectar los productos
const destacadosContainer = document.querySelector("#productos-aleatorios .productos");
const masVendidosContainer = document.querySelector("#productos-mas-vendidos .productos");

// 2) Función general para traer productos de una categoría y mostrarlos en pantalla
function cargarProductosPorCategoria(nombreCategoria, contenedor) {
    // Armamos la URL para esa categoría
    const url = BASE_URL + "/category/" + nombreCategoria;

    // Pedimos los datos a la API
    fetch(url)
        .then(function (response) {
            // Pasamos la respuesta a JSON
            return response.json();
        })
        .then(function (data) {
            // "data.products" es un array con los productos
            const productos = data.products;

            // Vamos a ir armando un solo string con todo el HTML
            let html = "";

            // Definimos cuántos productos queremos mostrar (máximo 10)
            let limite = 10;
            if (productos.length < 10) {
                limite = productos.length;
            }

            // Recorremos el array de productos
            for (let i = 0; i < limite; i++) {
                const producto = productos[i];

                // Por cada producto armamos una "card" de HTML
                html +=
                    '<article class="producto">' +
                        '<img src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
                        '<h3>' + producto.title + '</h3>' +
                        '<p class="descripcion">' + producto.description + '</p>' +
                        '<p class="precio">$ ' + producto.price + '</p>' +
                        // Link al detalle del producto con query string ?id=
                        '<a href="./product.html?id=' + producto.id + '" class="btn-detalle">Ver detalle</a>' +
                    '</article>';
            }

            // Inyectamos todo el HTML junto en el contenedor
            contenedor.innerHTML = html;
        })
        .catch(function (error) {
            // Si algo falla, lo vemos en la consola
            console.log("Error al traer los productos: ", error);
        });
}

// 3) Llamamos a la función para cada sección de la home

// Sección "Productos destacados" -> categoría "smartphones"
cargarProductosPorCategoria("smartphones", destacadosContainer);

// Sección "Más vendidos" -> categoría "laptops"
cargarProductosPorCategoria("laptops", masVendidosContainer);
