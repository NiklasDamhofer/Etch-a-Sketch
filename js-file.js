const container = document.querySelector('#main-container');


function createRows(nr) {
    let num = nr * nr;
    for (var i = 0; i < num; i++) {
        const content = document.createElement('div');
        content.classList.add('container');
        container.append(content); 
        container.setAttribute('style', `grid-template-columns: repeat(${nr}, 1fr); grid-template-rows: repeat(${nr}, 1fr);`);      
    };
};

createRows(80);

function changeColor() {
    if ()
}