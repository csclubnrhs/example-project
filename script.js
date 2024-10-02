const mins = document.querySelector('.minutes');
const secs = document.querySelector('.seconds');
const millisec = document.querySelector('.milliseconds');

let milliNum = 0;
let secNum = 0;
let minNum = 0;
let INTERVAL;

function milliseconds() {
    milliNum++;
    if (milliNum < 10) {
        millisec.innerHTML = '0' + milliNum;
    } else {
        millisec.innerHTML = milliNum;
    }

    if (milliNum == 99) {
        milliNum = 0;
        seconds();
    }
}

function seconds() {
    secNum++;

    if (secNum < 10) {
        secs.innerHTML = '0' + secNum;
    } else {
        secs.innerHTML = secNum;
    }
    if (secNum == 59) {
        secNum = 0;
        minutes();
    }
}

function minutes() {
    minNum++;
    if (minNum < 10) {
        mins.innerHTML = '0' + minNum;
    } else {
        mins.innerHTML = minNum;
    }
    if (secNum == 99) {
        reset();
    }
}

function stop() {
    clearInterval(INTERVAL);
}

function start() {
    clearInterval(INTERVAL);
    INTERVAL = setInterval(() => {
        milliseconds();
    }, 10);
}

function reset() {
    clearInterval(INTERVAL);
    milliNum = 0;
    secNum = 0;
    minNum = 0;
    millisec.innerHTML = '00';
    sec.innerHTML = '00';
    min.innerHTML = '00';
}
