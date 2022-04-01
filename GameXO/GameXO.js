const ss = document.querySelectorAll('a')
const ssText = document.querySelector('.div')
let xo = document.getElementById('xo')
const resetbtn = document.getElementById('reset')

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

function reset() {
    ssText.innerHTML = ' '
}

resetbtn.addEventListener('click',reset)