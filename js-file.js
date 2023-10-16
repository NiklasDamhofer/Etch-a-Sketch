const container = document.querySelector('#main-container');
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRow(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

function makeColumns(cellNum) {
    for (let r = 0; r < cellNum; r++) {
        for (let c = 0; c < cellNum; c++) {
            let newCell = document.createElement("div");
            row[c].appendChild(newCell).className = "cell";
        };
    };
};


function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "gird-item";
    };
};

makeRows(16, 16);