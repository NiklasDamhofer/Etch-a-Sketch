const container = document.querySelector('#main-container');
const div = document.createElement('div');


function createRows(nr) {
    let num = nr * nr;
    for (var i = 0; i < num; i++) {
        const content = document.createElement('div');
        content.classList.add('container');
        container.append(content);       
    };
};

createRows(16);

const colContainer = document.getElementsByClassName('container');


   

function createCols(num) {
    const cols = document.createElement('div');
    cols.classList.add('containerInit');
    colContainer.append(cols);
}
//const content = document.createElement('div');
//content.classList.add('container');
//container.appendChild(content);