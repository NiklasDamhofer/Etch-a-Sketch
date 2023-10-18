const container = document.querySelector('#main-container');

const colorButton = document.getElementById("btn1");
const eraseButton = document.getElementById("btn3");
const reloadButton = document.getElementById("btn4");

const colorInput = document.querySelector('input[type=color]');
let color = colorInput.value;


colorButton.addEventListener("click", () => {
    color = colorInput.value;
});

eraseButton.addEventListener("click", () => {
    color = "white";
});

reloadButton.addEventListener("click", function() {
    location.reload();
});






function createRows(nr) {
    let num = nr * nr;
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    for (var i = 0; i < num; i++) {
        const content = document.createElement('div');
        content.classList.add('container');
        content.addEventListener('mouseover', () => {
            content.style.backgroundColor = color;
        })
        container.append(content); 
        container.setAttribute('style', `grid-template-columns: repeat(${nr}, 1fr); grid-template-rows: repeat(${nr}, 1fr);`);      
    };
};

createRows(16);


function changeSize(input) {
    createRows(input);
}






