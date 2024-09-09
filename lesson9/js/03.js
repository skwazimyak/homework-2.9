const div = document.querySelector("div")
const input = document.createElement('input')
document.body.appendChild(input)
const button = document.createElement("button")
document.body.appendChild(button)
button.classList.add("button")
const pattern = /^\d\d\d-\d\d\d-\d\d-\d\d$/
button.onclick = () => {
    const check = input.value.search(pattern)
    if(check === -1){
        div.innerHTML = "You typed something wrong"
        button.classList.remove("accept")
        div.classList.add("show")
    }
    else{
        div.classList.remove("show")
        button.classList.add("accept")
        document.location = "https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg"
    }
}