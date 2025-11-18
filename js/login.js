// PUNTO 7.a - Validación y guardado de datos en storage //

let formularioLogin = document.querySelector('.formulario');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');
let mensajeError = document.querySelector('#mensaje-error');

formularioLogin.addEventListener('submit', function (e) {
    e.preventDefault();

    // Limpiar mensaje de error
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

    // Si todo está OK: guardo el email y voy al home
    localStorage.setItem('emailUsuario', inputEmail.value);

    // Redirección a la página principal
    location.href = './index.html';
});
