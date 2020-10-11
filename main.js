const manuBtn = document.querySelector('.manu__btn');
const mainNav = document.querySelector('.nav__main');
const manuHamburgerBtn = document.querySelector('.manu__btn');
const manuHamburger = document.querySelector('.manu__btn-burger');
const signup = document.querySelector('.signup');
const signupClose = document.querySelector('.sign__close__icon');
const login = document.querySelector('.login');
const loginClose = document.querySelector('.login__close__icon');
const inputs = document.querySelectorAll('.input');
let manuOpen = false;
let loginOpen = false;
let signUp = false;

// hamburger Memu
manuBtn.addEventListener('click', () =>{
    if(!manuOpen){
        manuBtn.classList.add('open');
        manuOpen = true;
    }else{
        manuBtn.classList.remove('open');
        manuOpen = false;
    }
    mainNav.classList.toggle('active');
    manuHamburger.classList.toggle('active');
    manuHamburgerBtn.classList.toggle('active');
})

// Signup Box Func
function signUpFunc() {

    if(manuOpen === true){
        manuBtn.classList.remove('open');
        mainNav.classList.remove('active');
        manuHamburger.classList.remove('active');
        manuHamburgerBtn.classList.remove('active');
        manuOpen = false;
    }
    if(!signUp){
        signup.classList.add('active');
        signUp = true;
    }else{
        signup.classList.remove('active');
        signUp = false;
    }
}

// Login Box Func

function loginFunc() {

    if(manuOpen === true){
        manuBtn.classList.remove('open');
        mainNav.classList.remove('active');
        manuHamburger.classList.remove('active');
        manuHamburgerBtn.classList.remove('active');
        manuOpen = false;
    }

    if(!loginOpen){
        login.classList.add('active');
        loginOpen = true;
    }else{
        login.classList.remove('active');
        loginOpen = false;
    }
}

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});