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



// --- PUNTO 10: RESULTADOS DE BÚSQUEDA ---
    
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let termino = qsObj.get("q");
let titulo = document.querySelector(".titulo-resultados");
let contenedor = document.querySelector(".lista-resultados");
let mensaje = document.querySelector(".no-results");
titulo.innerText = "Resultados de búsqueda para: " + termino;

let url = "https://dummyjson.com/products/search?q=" + termino;

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let productos = data.products;
        if(productos.length === 0){
            mensaje.style.display = "block";
            mensaje.innerText = "No hay resultados para el término: " + termino;
            return;
        }
        for(let i = 0; i < productos.length; i++){
            let p = productos[i];
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

