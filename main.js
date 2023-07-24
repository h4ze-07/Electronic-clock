let prevHours, prevMins, prevSecs;

function currentTime() {

    let date = new Date();

    let 
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();

    let 
        hContainer = document.getElementById('hours'),
        mContainer = document.getElementById('mins'),
        sContainer = document.getElementById('secs');

    if (h !== prevHours) {
        hContainer.innerText = updateTime(h);
        prevHours = h;
    }
    if (m !== prevMins) {
        mContainer.innerText = updateTime(m);
        prevMins = m;
    }
    if (s !== prevSecs) {
        sContainer.innerText = updateTime(s);
        prevSecs = s;
    }

    setInterval(currentTime, 1000);

    function updateTime(el) {
        if (el < 10) {
            return '0' + el 
        } else {
            return el
        }
    }
};

currentTime();