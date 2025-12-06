const lights = {
    red: document.getElementById('red'),
    yellow: document.getElementById('yellow'),
    green: document.getElementById('green')
};

const btnRed = document.getElementById('btn-red');
const btnYellow = document.getElementById('btn-yellow');
const btnGreen = document.getElementById('btn-green');
const btnOff = document.getElementById('btn-off');

function turnOffLights() {
    Object.values(lights).forEach(light => {
        light.classList.remove('red-on', 'yellow-on', 'green-on');
    });
}

function activateLight(color) {
    turnOffLights();
    
    if (lights[color]) {
        lights[color].classList.add(color + '-on');
    }
}

btnRed.addEventListener('click', () => {
    activateLight('red');
});

btnYellow.addEventListener('click', () => {
    activateLight('yellow');
});

btnGreen.addEventListener('click', () => {
    activateLight('green');
});

btnOff.addEventListener('click', () => {
    turnOffLights();
});

turnOffLights();