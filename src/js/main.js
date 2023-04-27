//Declaration des varriable
const burgerBtn = document.querySelector("#burger");
const navMenu = document.querySelector(".header .content .nav");

let navList = document.querySelector(".header .nav .list");

//function

function burgerOn() {
    burgerBtn.classList.toggle('active');
    if (burgerBtn.classList.contains('active')){
        navMenu.classList.add('active');
    } else {
        navMenu.classList.remove('active');
    }
}

//EventListner

burgerBtn.addEventListener('click', burgerOn);

