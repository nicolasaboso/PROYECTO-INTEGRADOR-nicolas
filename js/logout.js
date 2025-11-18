// PUNTO 8 --- LOGOUT //

let linkLogout = document.querySelector('#link-logout');

if (linkLogout !== null) {

    let itemLogin = document.querySelector('#item-login');
    let itemRegister = document.querySelector('#item-register');
    let itemUsuario = document.querySelector('#item-usuario');

    linkLogout.addEventListener('click', function(e) {

        e.preventDefault();
        localStorage.removeItem('emailUsuario');
        itemUsuario.style.display = 'none';
        itemLogin.style.display = '';
        itemRegister.style.display = '';
    });
}
