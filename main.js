const one = document.querySelector('#one')
const a = document.querySelector('.two')
const b = document.querySelector('.add')
const c = document.querySelector('.del')

a.onclick = function (){
    a.style.height = `200px`
    a.style.width = '200px'
    a.innerHTML = `<h1>Смотри как стало</h1>`
}

b.onclick = function classList () {
    one.classList.add('raz')
    one.classList.add('dva')
    one.classList.add('tri')
}
c.onclick = function classList () {
    one.classList.remove('raz')
}



