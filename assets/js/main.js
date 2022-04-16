let name1 = document.getElementById("name");
let button = document.getElementById("btn");
let colors=["red", "blue", "green"];
const changeColor = () => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

Math.random();

console.log(name1);

button.addEventListener('click', () => changeColor());

