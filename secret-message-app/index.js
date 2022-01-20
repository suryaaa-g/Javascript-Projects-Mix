const {hash} = window.location

const message = atob(hash.replace('#', ''))

if(message){
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#message-show').classList.remove('hide')


    document.querySelector('h1').innerHTML = message
}

document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault()

    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')

    //getting input
    const input = document.querySelector('#message-input')
    //console.log(input.value)

    const encrypted = btoa(input.value)

    const input2 = document.querySelector('#link-input')
    
    
    input2.value = `${window.location}#${encrypted}`

    input2.select()


    
})