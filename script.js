let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");

for (item of btn) {
    item.addEventListener("click", (e) => {
        btntxt = e.target.innerText;
        if (btntxt == "x") {
            btntxt = "*";
        }
        if (btntxt == "÷") {
            btntxt = "/";
        }
        if (btntxt == "_") {
            btntxt = "-";
        }
        // if(btntxt=="π"){
        //     btntxt=""
        // }
        screen.value += btntxt;
    })
}
function calculate() {
    try {
        screen.value = eval(screen.value);
        if (screen.value.length > 11) {
            screen.value = screen.value.toFixed(10);
        }
    }
    catch (err) {
        alert("Invalid");
    }
}

function del() {
    screen.value = screen.value.slice(0, -1);
}

function clr() {
    screen.value = screen.value.slice(screen.value.length);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value);
    if (screen.value.length > 11) {
        screen.value = screen.value.slice(0, 11);
    }
}

function pi() {
    screen.value = screen.value * (3.1415926535);
    if (screen.value.length > 11) {
        screen.value = screen.value.slice(0, 11);
    }
}
function pow() {
    screen.value = Math.pow(screen.value, 2);
}
function fact() {
    let num = screen.value;
    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }
    screen.value = num;
}
function e() {
    screen.value = Math.log2(screen.value);
    if (screen.value.length > 11) {
        screen.value = screen.value.slice(0, 11);
    }
}

function sin() {
    screen.value = Math.sin(screen.value * (0.0174533));
    if (screen.value.length > 11) {
        screen.value = screen.value.slice(0, 11);
    }
}
function cos() {
    screen.value = Math.cos(screen.value);
    if (screen.value.length > 11) {
        screen.value = screen.value.slice(0, 11);
    }
}
function tan() {
    screen.value = Math.tan(screen.value * (0.0174533));
    if (screen.value.length > 11) {
        screen.value = screen.value.slice(0, 11);
    }
}

function prt() {
    let num = screen.value
    let num2 = window.prompt("Enter the percentage value here:- ");
    screen.value = (num * num2) / 100;
}