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

// PUNTO 9 --- REGISTER: VALIDACIÓN DE FORMULARIO //


let formularioRegistro = document.querySelector('.formulario');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');
let inputPassword2 = document.querySelector('#password2');
let inputTerminos = document.querySelector('#terminos');
let mensajeError = document.querySelector('#mensaje-error');

formularioRegistro.addEventListener('submit', function (e) {
    e.preventDefault();
    mensajeError.innerText = '';

    if (inputEmail.value === '') {
        mensajeError.innerText = 'El email es obligatorio';
        return;
    }

    if (inputPassword.value === '') {
        mensajeError.innerText = 'La contraseña es obligatoria';
        return;
    }

    if (inputPassword.value.length < 6) {
        mensajeError.innerText = 'La contraseña debe tener al menos 6 caracteres';
        return;
    }

    if (inputPassword2.value === '') {
        mensajeError.innerText = 'Debes repetir la contraseña';
        return;
    }

    if (inputPassword.value !== inputPassword2.value) {
        mensajeError.innerText = 'Las contraseñas no coinciden';
        return;
    }

    if (!inputTerminos.checked) {
        mensajeError.innerText = 'Debes aceptar los términos y condiciones';
        return;
    }
    location.href = './login.html';
});
