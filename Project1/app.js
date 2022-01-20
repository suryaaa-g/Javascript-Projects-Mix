/*

Project that demonstrates the DOM, added event listeners that help open and close the function. 



*/
const open = document.querySelector(".open");

const modalContainer = document.querySelector(".modal-container");

const close = document.querySelector(".modal-btn");

open.addEventListener("click", () => {
    modalContainer.classList.add("show");
})

close.addEventListener("click", () => {
    modalContainer.classList.remove("show");
})