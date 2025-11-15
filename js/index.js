
let destacados = document.querySelector('#productos-aleatorios .productos');
let masVendidos = document.querySelector('#productos-mas-vendidos .productos');
let listaCategorias = document.querySelector('.category-list');
console.log(destacados);
console.log(masVendidos);
console.log(listaCategorias);
// cat lat 
let urlCategorias = 'https://dummyjson.com/products/category-list';
fetch(urlCategorias)
  .then(function (response) {
    return response.json();
  })
.then(function (data) {
let htmlCategorias = '';
for (let i = 0; i < data.length; i++) {
    let categoria = data[i]; 
    htmlCategorias = htmlCategorias
        + '<li><a href="./category.html?cat=' + categoria + '">'
        + categoria
        + '</a></li>';
    }
    listaCategorias.innerHTML = htmlCategorias;
  })
.catch(function (error) {
console.log('Error cargando categorías: ' + error);
  });
// pro des 
let urlDestacados = 'https://dummyjson.com/products/category/smartphones';
fetch(urlDestacados)
  .then(function (response) {
    return response.json();
  })
.then(function (data) {
let info = data.products; 
console.log(info);
for (let i = 0; i < 5 && i < info.length; i++) {
    let p = info[i];
    destacados.innerHTML +=
        '<div class="producto">'
        +   '<a href="./product.html?id=' + p.id + '">'
        +     '<img src="' + p.thumbnail + '" alt="' + p.title + '">'
        +     '<h3>' + p.title + '</h3>'
        +     '<p>' + p.description + '</p>'
        +     '<p>Precio: $' + p.price + '</p>'
        +   '</a>'
        + '</div>';
    }
  })
.catch(function (error) {
console.log('Error cargando destacados: ' + error);
  });
// -Productos mas v
let urlMasVendidos = 'https://dummyjson.com/products/category/laptops';
fetch(urlMasVendidos)
.then(function (response) {
return response.json();
  })
.then(function (data) {
let info = data.products;
console.log(info);
for (let i = 0; i < 5 && i < info.length; i++) {
    let p = info[i];
    masVendidos.innerHTML +=
        '<div class="producto">'
          '<a href="./product.html?id=' + p.id + '">'
             '<img src="' + p.thumbnail + '" alt="' + p.title + '">'
             '<h3>' + p.title + '</h3>'
             '<p>' + p.description + '</p>'
             '<p>Precio: $' + p.price + '</p>'
           '</a>'
         '</div>';
    }
  })
.catch(function (error) {
console.log('Error cargando más vendidos: ' + error);
  });
