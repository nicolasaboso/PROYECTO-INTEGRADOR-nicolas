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

// PUNTO 3 --- MENÚ VERTICAL DE CATEGORÍAS //

let listaCategorias = document.querySelector('.category-list');
let urlCategorias = "https://dummyjson.com/products/category-list";

fetch(urlCategorias)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
    
        for (let i = 0; i < data.length; i++) {
            let categoria = data[i];

            listaCategorias.innerHTML += `
                <li>
                    <a href="./category.html?category=${categoria}">
                        ${categoria}
                    </a>
                </li>
            `;
        }
    })
    .catch(function(error){
        console.log(error);
    });


























const tituloCat = document.querySelector('.category-title');
const contenedorProd = document.querySelector('.productos');
let qs = location.search;                 
let params = new URLSearchParams(qs);     
let cat = params.get('cat');
if (cat === null || cat === '') {
  if (tituloCat) {
    tituloCat.innerText = 'Categoría no seleccionada';
  }
  if (contenedorProd) {
    contenedorProd.innerHTML = '<p>No se seleccionó ninguna categoría.</p>';
  }
} else {
  if (tituloCat) {
    tituloCat.innerText = 'Categoría: ' + cat;
  }
  if (contenedorProd) {
    contenedorProd.innerHTML = '<p>Cargando productos...</p>';
  }
  const API_BASE = 'https://dummyjson.com';
  fetch(API_BASE + '/products/category/' + cat)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(data) {
let productos = data.products;
if (!productos || productos.length === 0) {
    contenedorProd.innerHTML = '<p>No hay productos en esta categoría.</p>';
      } else {
        let html = '';
        let limite = 30;
        for (let i = 0; i < limite && i < productos.length; i++) {
        let p = productos[i];
        html +=
            '<div class="producto">'
              '<img src="' + p.thumbnail + '" alt="' + p.title + '">'
              '<h3>' + p.title + '</h3>'
              '<p>' + p.description + '</p>'
              '<p>Precio: $' + p.price + '</p>'
              '<a href="./product.html?id=' + p.id + '" class="btn">Ver detalle</a>'
              '</div>';
        }
        contenedorProd.innerHTML = html;
      }
    })
    .catch(function(error) {
      contenedorProd.innerHTML = '<p>Ocurrió un error al cargar la categoría.</p>';
    });
}
