const body = document.body

const button = document.querySelector('.switch')

const switchColor = document.querySelector('.color')

button.addEventListener('click', function(){
    let color1 = randomNum()
    let color2 = randomNum()
    let color3 = randomNum()

    const colorString = `rgb(${color1}, ${color2}, ${color3})`


    body.style.backgroundColor = colorString

    switchColor.innerHTML = colorString;
})


function randomNum(){
    return Math.floor(Math.random() * 256);
}