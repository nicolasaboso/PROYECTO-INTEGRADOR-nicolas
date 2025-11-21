let logout = document.querySelector('#link-logout');

if (logout) {
    logout.addEventListener('click', function(e){
        e.preventDefault();
        localStorage.removeItem('emailUsuario');
        document.querySelector('#item-usuario').style.display = 'none';
        document.querySelector('#item-login').style.display = '';
        document.querySelector('#item-register').style.display = '';
    });
}


