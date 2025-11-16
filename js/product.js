// PUNTO 2 --- HEADER Y FOOTER //

let formulario = document.querySelector('.search-form');
let inputBusqueda = document.querySelector('.search-input');

formulario.addEventListener('submit', function(e){

    e.preventDefault();

    if(inputBusqueda.value === ""){
        return alert("El campo de búsqueda no puede estar vacío");
    } ``
    if(inputBusqueda.value.length < 3){
        return alert("El término debe tener al menos 3 caracteres");
    } 
    
    localStorage.setItem("ultimaBusqueda", inputBusqueda.value);
    this.submit();
});

// PUNTO 5 --- PRODUCTO: REVIEWS DESDE API //
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get("id");

let titulo = document.querySelector("#product-title");
let marca = document.querySelector("#product-brand");
let descripcion = document.querySelector("#product-description");
let precio = document.querySelector("#product-price");
let imagen = document.querySelector("#product-image");
let categoria = document.querySelector("#product-category");
let stock = document.querySelector("#product-stock");
let tags = document.querySelector("#product-tags");
let reviews = document.querySelector("#reviews-container");

console.log("id del producto:", id);

fetch("https://dummyjson.com/products/" + id)
    .then(function(res){
        return res.json();
    })
    .then(function(data){

console.log("producto:", data); 

titulo.innerText = data.title;
marca.innerText = data.brand;
descripcion.innerText = data.description;
precio.innerText = "$ " + data.price;
stock.innerText = data.stock;
imagen.src = data.thumbnail;
imagen.alt = data.title;
categoria.innerText = data.category;
categoria.href = "./category.html?category=" + data.category;

tags.innerHTML = "";
    for (let i = 0; i < data.tags.length && i < 3; i++) {
    tags.innerHTML += "<li>" + data.tags[i] + "</li>";
        }

reviews.innerHTML = "";
for (let i = 0; i < data.reviews.length; i++) {
        let r = data.reviews[i];

        reviews.innerHTML += `
        <article class="review">
            <p><strong>Rating:</strong> ${r.rating}</p>
            <p><strong>Comentario:</strong> ${r.comment}</p>
            <p><strong>Fecha:</strong> ${r.date}</p>
            <p><strong>Usuario:</strong> ${r.reviewerName}</p>
        </article>
        `;
    }
})
.catch(function(e){
    console.log("Error:", e);
});
