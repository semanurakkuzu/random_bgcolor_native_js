import './style.scss'


const randomColors = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor
    document.querySelector(".text").innerHTML = "#" + randomColor

}

document.querySelector(".btn").onclick = () => {
    randomColors()
}