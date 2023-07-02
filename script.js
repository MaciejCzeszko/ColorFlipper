const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector('#btn');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    colorSpan.innerHTML = colors[randomNumber];
})