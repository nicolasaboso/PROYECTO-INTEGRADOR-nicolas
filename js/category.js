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
