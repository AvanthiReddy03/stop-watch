let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
    timer = setInterval(updateDisplay, 1000);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    document.getElementById('display').textContent = formattedTime;
}

function pad(value) {
    return value < 10 ? '0' + value : value;
}
