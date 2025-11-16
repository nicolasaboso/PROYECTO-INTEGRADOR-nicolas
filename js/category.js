// PUNTO 2 --- HEADER Y FOOTER //

let formulario = document.querySelector('.search-form');
let inputBusqueda = document.querySelector('.search-input');

formulario.addEventListener('submit', function(e){

    e.preventDefault();

    if (inputBusqueda.value === "") {
        return alert("El campo de búsqueda no puede estar vacío");
    } 

    if (inputBusqueda.value.length < 3) {
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


// PUNTO 6 --- PRODUCTOS POR CATEGORÍA //

let qs = location.search;
let qsObj = new URLSearchParams(qs);

let categoria = qsObj.get('category');

if (categoria === null) {
    categoria = qsObj.get('cat');
}

let tituloCategoria = document.querySelector('.category-title');
let contenedorProductos = document.querySelector('#categoria-productos .productos');

if (categoria !== null) {

    tituloCategoria.innerText = 'Categoría: ' + categoria;

    fetch('https://dummyjson.com/products/category/' + categoria)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {

            contenedorProductos.innerHTML = '';

            for (let i = 0; i < data.products.length; i++) {
                let p = data.products[i];

                contenedorProductos.innerHTML += `
                    <article class="producto">
                        <img src="${p.thumbnail}" alt="${p.title}">
                        <h3>${p.title}</h3>
                        <p>${p.description}</p>
                        <p>$ ${p.price}</p>
                        <a href="./product.html?id=${p.id}">Ver detalle</a>
                    </article>
                `;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
