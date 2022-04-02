const burger = document.getElementById('burger')
const nav = document.querySelector('nav')
const ss = document.querySelectorAll('a')
const ssText = document.querySelector('.div')
let xo = document.getElementById('xo')
const resetbtn = document.getElementById('reset')

burger.onclick = () =>{
    nav.classList.toggle('nav-burger')
}

console.log('Starting...')

function action(ssText) {
    ssText.target.textContent = xo.textContent
}
ss.forEach(btn => {
    btn.addEventListener('click', action)
});
function change() {
    if(xo.innerHTML === 'X'){
        xo.innerHTML = 'O'
    } else{
        xo.innerHTML = 'X'
    }
}
ss.forEach(btn => {
    btn.addEventListener('click', change)
});

// function resultGame() {
//     if
// }

resetbtn.addEventListener('click',reset)