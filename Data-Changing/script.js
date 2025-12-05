let h1 = document.getElementById("h1")
let p = document.getElementById("p")

function clicked() {
    p.textContent="Aravinth";
    h1.style.textDecoration="line-through";
}

function removed() {
    p.textContent="none";
    h1.style.textDecoration="none";
}

