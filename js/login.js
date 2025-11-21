// PUNTO 7.a - Validación y guardado de datos en storage //

let formularioLogin = document.querySelector('.formulario');
let inputEmail = document.querySelector('#email');
let inputPassword = document.querySelector('#password');
let mensajeError = document.querySelector('#mensaje-error');

formularioLogin.addEventListener('submit', function (e) {
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
    localStorage.setItem('emailUsuario', inputEmail.value);
    location.href = './index.html';
});
