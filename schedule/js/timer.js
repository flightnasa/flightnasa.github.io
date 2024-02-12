function period(t) {
    for (i = 0; i < data.length; i++)
        if (data[i][0] * 3600 + data[i][1] * 60 + 5 > t) return data[i]
}

! function tick() {
    start = new Date;
    secs = start.getMilliseconds() / 1e3 + start.getSeconds() + 60 * start.getMinutes() + 3600 * start.getHours(); 

    diff = period(secs)[0] * 3600 + period(secs)[1] * 60 + 5 - secs;
    
    $("#time_left").html(new Date(diff * 1000).toISOString().slice(11, 19));
    document.title = new Date(diff * 1000).toISOString().slice(11, 19);

    $("#time_left--period").html("CURRENT PERIOD: " + period(secs)[2]);

    $("#progress_bar").css("width", 100 - ((Math.floor(diff % 60) / .6) + ((diff % 1) / .6)) + "%");

    setTimeout(tick, 25);
}();