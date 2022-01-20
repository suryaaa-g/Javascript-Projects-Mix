const bigImage = document.querySelector(".full-img")

const smallImage = document.querySelectorAll(".gallery img")

const modal = document.querySelector(".modal")


smallImage.forEach(function(img){
    img.addEventListener("click", () => {
        modal.classList.add("open")
        bigImage.classList.add("open")
        const og = img.getAttribute('alt')
        bigImage.src = `img/full/${og}.jpg`   
    })
    

});

modal.addEventListener("click", function(e) {
    if(e.target.classList.contains("modal")){
        e.classList.remove("open")
    }
})