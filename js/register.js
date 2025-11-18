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

// PUNTO 9 - Validación del registro //

let formularioRegistro = document.querySelector('.formulario');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');
let inputPassword2 = document.querySelector('#password2');
let inputTerminos = document.querySelector('#terminos');
let mensajeError = document.querySelector('#mensaje-error');

formularioRegistro.addEventListener('submit', function (e) {
    e.preventDefault();

    // Limpiar el mensaje de error
    mensajeError.innerText = '';

    // Email obligatorio
    if (inputEmail.value === '') {
        mensajeError.innerText = 'El email es obligatorio';
        return;
    }

    // Contraseña obligatoria
    if (inputPassword.value === '') {
        mensajeError.innerText = 'La contraseña es obligatoria';
        return;
    }

    // Contraseña mínimo 6 caracteres
    if (inputPassword.value.length < 6) {
        mensajeError.innerText = 'La contraseña debe tener al menos 6 caracteres';
        return;
    }

    // Repetir contraseña obligatorio
    if (inputPassword2.value === '') {
        mensajeError.innerText = 'Debes repetir la contraseña';
        return;
    }

    // Coincidencia de contraseñas
    if (inputPassword.value !== inputPassword2.value) {
        mensajeError.innerText = 'Las contraseñas no coinciden';
        return;
    }

    // Aceptar términos
    if (!inputTerminos.checked) {
        mensajeError.innerText = 'Debes aceptar los términos y condiciones';
        return;
    }

    // Si todo está OK → redirigir al login
    location.href = './login.html';
});
