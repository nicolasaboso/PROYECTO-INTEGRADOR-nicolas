// PUNTO 7 b --- SALUDO //

let emailUsuario = localStorage.getItem('emailUsuario');

let navLinks = document.querySelector('.nav-links');
let itemLogin = document.querySelector('#item-login');
let itemRegister = document.querySelector('#item-register');

if (emailUsuario !== null) {

    itemLogin.style.display = 'none';
    itemRegister.style.display = 'none';

   navLinks.innerHTML += `
        <li id="item-usuario">
            <span>Bienvenido: ${emailUsuario}</span>
            <a href="#" id="link-logout">logout</a>
        </li>
    `;

}


