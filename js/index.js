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


/// PUNTO 3 --- MENÚ VERTICAL DE CATEGORÍAS //

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


// PUNTO 4 --- HOME: PRODUCTOS DESDE API //

let destacados  = document.querySelector('#productos-aleatorios .productos');
let masVendidos = document.querySelector('#productos-mas-vendidos .productos');

function cargar(nombreCategoria, contenedor) {

    fetch('https://dummyjson.com/products/category/' + nombreCategoria)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {

            contenedor.innerHTML = '';

            for (let i = 0; i < 10; i++) {
                let p = data.products[i];

                contenedor.innerHTML += `
                    <article class="producto">
                        <img src="${p.thumbnail}" alt="${p.title}">
                        <h3>${p.title}</h3>
                        <p>${p.description}</p>
                        <p>$ ${p.price}</p>
                        <a href="./product.html?id=${p.id}">ver detalle</a>
                    </article>
                `;
            }
        });
}

cargar('smartphones', destacados);
cargar('laptops', masVendidos);
