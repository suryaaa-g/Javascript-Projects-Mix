const toggle = document.querySelector('.toggle-btn')

const mainHeader = document.querySelector('.main-header')
const overlay = document.querySelector('.overlay')

toggle.addEventListener("click", function(){
    toggle.classList.toggle('open')
    mainHeader.classList.toggle('open')
    overlay.classList.toggle('open')
})