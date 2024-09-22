var hamburger = document.querySelector('#hamburger')
var mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click',()=>{
        mobileMenu.classList.toggle('toggled');
})