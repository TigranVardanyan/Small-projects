'use strict';

(function() {

    const startStop = document.querySelector('.ss');
    const res = document.querySelector('.res');
    const clr = document.querySelector('.clr');
    const pHour = document.querySelector('.hour');
    const pMin = document.querySelector('.min');
    const pSec = document.querySelector('.sec');
    const pMsec = document.querySelector('.msec');
    const panel = document.querySelector('.panel')
    let condition1 = false; // run(true)/stop(false)
    let condition2 = false;
    let myInterval;

    let timeStart;
    let timeNow;
    let time;

    panel.style.pointerEvents = 'none';
    pHour.style.pointerEvents = 'none';
    pMin.style.pointerEvents = 'none';
    pSec.style.pointerEvents = 'none';
    pMsec.style.pointerEvents = 'none';

    startStop.addEventListener('click' , start);
    res.addEventListener('click' , restart)
    clr.addEventListener('click' , clear)

    function start() {
        if (condition1 === false) {
            if (condition2 === false) {
                timeStart = window.performance.now();
                condition2 = true;
            } else {
                timeStart = window.performance.now() - time;
            }
            myInterval = setInterval(showTime , 30);
            condition1 = true;
        } else {
            clearInterval(myInterval);
            condition1 = false;
        }
    }

    function restart() {
        timeStart = window.performance.now();
        clearInterval(myInterval);
        myInterval = setInterval(showTime , 30);
        condition1 = true;
        condition2 = true;
    }

    function clear() {
        condition1 = false;
        condition2 = false;
        clearInterval(myInterval);
        pHour.innerHTML = "00";
        pMin.innerHTML = "00";
        pSec.innerHTML = "00";
        pMsec.innerHTML = "00";
    }

    function showTime() {
        timeNow = window.performance.now();
        console.log(timeNow);
        console.log(timeStart);
        time = timeNow - timeStart;
        let msec = (time % 100).toFixed(0);
        let sec = Math.floor(time / 1000 % 60).toString();
        let min = Math.floor(time / 1000 / 60  % 60).toString();
        let hour = Math.floor(time / 1000 / 60 / 60 % 24).toString();
        if (hour.length < 2) {
            hour = "0" + hour;
        }
        if (min.length < 2) {
            min = "0" + min;
        }
        if (sec.length < 2) {
            sec = "0" + sec;
        }
        if (msec.length < 2) {
            msec = "0" + msec;
        }
        pHour.innerHTML = hour;
        pMin.innerHTML = min;
        pSec.innerHTML = sec;
        pMsec.innerHTML = msec;
    }




})();



