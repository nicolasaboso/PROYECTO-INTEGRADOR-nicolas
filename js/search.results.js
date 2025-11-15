let queryString = location.search;
let queryParams = new URLSearchParams(queryString);
let searchQuery = queryParams.get("q");
let noResultsSection = document.querySelector(".no-results");
let resultsSection = document.querySelector(".results");
let headerText = document.querySelector(".container1");          
let loadingIndicator = document.querySelector(".loading-indicator"); 

if (noResultsSection) {
    noResultsSection.style.display = "none";
}
if (resultsSection) {
    resultsSection.style.display = "none";
}
if (loadingIndicator) {
    loadingIndicator.style.display = "block";
}
if (searchQuery === null || searchQuery === "") {
    if (headerText) {
        headerText.innerText = "Resultados de tu búsqueda (vacío)";
    }
    if (noResultsSection) {
        noResultsSection.innerText = "El campo de búsqueda no puede estar vacío.";
        noResultsSection.style.display = "block";
    }
    if (loadingIndicator) {
        loadingIndicator.style.display = "none";
    }
} else if (searchQuery.length < 3) {
    if (headerText) {
        headerText.innerText = 'Resultados para "' + searchQuery + '"';
    }
    if (noResultsSection) {
        noResultsSection.innerText = "El término debe tener al menos 3 caracteres.";
        noResultsSection.style.display = "block";
    }
    if (loadingIndicator) {
        loadingIndicator.style.display = "none";
    }
} else {
    if (headerText) {
        headerText.innerText = 'Resultados para "' + searchQuery + '"';
    }
const apiUrl = "https://dummyjson.com/products/search?q=" + searchQuery;
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
.then(function (data) {
let results = data.products;
let resultsHTML = "";
    if (!results || results.length === 0) {
        if (noResultsSection) {
            noResultsSection.innerText = "No se han encontrado resultados relacionados al término buscado.";
            noResultsSection.style.display = "block";
                }
        if (resultsSection) {
            resultsSection.style.display = "none";
            resultsSection.innerHTML = "";
                }
        } else {
        for (let i = 0; i < results.length; i++) {
            let item = results[i];
            resultsHTML +=
                '<article class="producto">'
                '<a href="product.html?id=' + item.id + '">'
                '<img src="' + item.thumbnail + '" alt="' + item.title + '" class="result-image">'
                '<h3 class="result-title">' + item.title + '</h3>'
                '<p class="result-date">Precio: $' + item.price + '</p>'
                '</a>' 
                 '</article>';
                }
if (resultsSection) {
    resultsSection.innerHTML = resultsHTML;
    resultsSection.style.display = "flex"; 
    }
 if (noResultsSection) {
        noResultsSection.style.display = "none";
    }
 if (loadingIndicator) {
        loadingIndicator.style.display = "none";
    }
    }
    })
.catch(function (error) {
console.log("Error cargando resultados de búsqueda: " + error);
     if (loadingIndicator) {
        loadingIndicator.style.display = "none";
            }
        });
}