
var logout_link = document.querySelector('.header__navbar-user-item-logout a');
var user_name = document.querySelector('.header__navbar-user-name');
var login = document.querySelector('.header__navbar-item-login');
var register = document.querySelector('.header__navbar-item-register');
var user_img = document.querySelector('.header__navbar-user-img');
var register_form = document.querySelector('.auth-form-register');
var login_form = document.querySelector('.auth-form-login');


logout_link.addEventListener('click',Logout);


function Logout(){
    register.setAttribute('style','display: block');
    login.setAttribute('style','display: block');
    user_name.setAttribute('style','display: none');
    user_img.setAttribute('style','display: none');
}

