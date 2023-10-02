function getTime() {
    var currenttime = new Date();
    var hours = currenttime.getHours();
    var minutes = currenttime.getMinutes();
    var seconds = currenttime.getSeconds();
    var session='AM'
    if (hours === 0) {
    hours = 12;
    }
    else if (hours > 12 && minutes > 0 && seconds > 0) {
    session = 'PM'
    hours = hours - 12;
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds+" "+session;
    document.getElementById("time").innerText = time;
    // setInterval(currenttime, 1000);
    }
    //setInterval(currenttime,1000);
    getTime();
    var interval;
    function startclock() {
    interval = setInterval(getTime, 1000);
    }
   
    function stopclock() {
    clearInterval(interval);
    }
    (function showDate() {
    var todayDate = new Date()
    document.getElementById("date").innerText = todayDate.toLocaleDateString();
    })()