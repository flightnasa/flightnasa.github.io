function period(t) {
    for (i = 0; i < data.length; i++)
        if (data[i][0] > t) return data[i]
}

! function tick() {
    start = new Date;
    secs = start.getMilliseconds() / 1e3 + start.getSeconds() + 60 * start.getMinutes() + 3600 * start.getHours(); 

    diff = period(secs)[0] - secs;
    hh = ("0" + Math.floor(diff / 3600)).slice(-2);
    mm = ("0" + Math.floor(diff / 60 % 60)).slice(-2);
    ss = ("0" + Math.floor(diff % 60)).slice(-2);
    ms = ("000" + (diff % 1)).slice(-3);

    $(".hh").html(`${hh}`);
    $(".mm").html(`${mm}`);
    $(".ss").html(`${ss}`);
    $(".ms").html(`${ms}`);

    $(".per").html(period(secs)[1]);
    $(".bg").css("width", 100 - ((Math.floor(diff % 60) / .6) + ((diff % 1) / .6)) + "%");
    document.title = `🔔 ${hh}:${mm}:${ss} 🔔`

    setTimeout(tick, 25)
}();
