const mouseCursor = document.querySelector('.cursor')
const navLinks = document.querySelector('.nav-links')

window.addEventListener("mousemove", cursor)

function cursor (e) {
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
    
}

navLinks.forEach((link) => {
    link.addEventListener('mouseout', function(){
        mouseCursor.classList.remove("link-grow")
        link.classList.add("hovered-link")
    })
    link.addEventListener('mouseover', function(){
        mouseCursor.classList.add("link-grow")
    })
})