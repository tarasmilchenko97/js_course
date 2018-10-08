'use strict';

(function () {

    function generateList(numOfNum, numbersParent) {
        const items = [];

        for (let i = 1; i <= numOfNum; i += 1) {
            const item = document.createElement('span');
            item.innerText = String(i);
            numbersParent.appendChild(item);
            items.push(item);

            if (i < numOfNum) {
                const coma = document.createElement('span');
                coma.innerText = ', ';
                numbersParent.appendChild(coma);
            }
        }
        return items;
    }

    const numOfNum = 10;
    const numbersParent = document.getElementById('numbers');

    const startBtn = document.getElementById('start');
    const pauseBtn = document.getElementById('pause');
    const stopBtn = document.getElementById('stop');

    const X1Btn = document.getElementById('X1');
    const X2Btn = document.getElementById('X2');
    const X3Btn = document.getElementById('X3');

    const count = document.getElementById('count');
    const items = generateList(numOfNum, numbersParent);

    let id;
    let seconds = 0;

    function X(asd){
        id = setInterval(() => {
            const index = seconds % (numOfNum * 2);
            if (index < numOfNum) {
                items[index].style.background = 'green';
            } else if (items[numOfNum * 2 - index - 1]) {
                items[numOfNum * 2 - index - 1].style.background = 'black';
            }
            count.innerText = `${++seconds} seconds`;
        }, asd);
    }

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
    X1Btn.disabled = true;
    X2Btn.disabled = true;
    X3Btn.disabled = true;

    startBtn.addEventListener('click', () => {
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        X1Btn.disabled = false;
        X2Btn.disabled = false;
        X3Btn.disabled = false;
        let asd = 1000;
        X(asd);
    });

    pauseBtn.addEventListener('click', () => {
        X2Btn.disabled = false;
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        X1Btn.disabled = false;
        X3Btn.disabled = false;
        stopBtn.disabled = false;
        clearInterval(id);
    });

    stopBtn.addEventListener('click', () => {
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
        X1Btn.disabled = true;
        X2Btn.disabled = true;
        X3Btn.disabled = true;
        clearInterval(id);
        seconds = 0;
        for (let i = 0; i <= items.length; i += 1) {
            if (i >= 0) {
                items[i].style.background = 'white';
            }
            count.innerText = '0 seconds';
        }
    });

    X1Btn.addEventListener('click', () => {
        X2Btn.disabled = false;
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        X3Btn.disabled = false;
        X1Btn.disabled = true;
        clearInterval(id);
        let asd = 1000;
        X(asd);
    });

    X2Btn.addEventListener('click', () => {
        X2Btn.disabled = true;
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        X3Btn.disabled = false;
        X1Btn.disabled = false;
        clearInterval(id);
        let asd = 500;
        X(asd);
    });

    X3Btn.addEventListener('click', () => {
        X3Btn.disabled = true;
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        X2Btn.disabled = false;
        X1Btn.disabled = false;
        clearInterval(id);
        let asd = 333;
        X(asd);
    });
}());
