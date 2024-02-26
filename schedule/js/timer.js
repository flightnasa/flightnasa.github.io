// determine what period it is
function period(t) {
     // sorcery
     for (i = 0; i < periods.length; i++)
          if (periods[i][0] * 3600 + periods[i][1] * 60 + 5 > t)
               return periods[i];
}

!(function tick() {
     // get seconds since start of day
     start = new Date();
     seconds =
          start.getMilliseconds() / 1e3 +
          start.getSeconds() +
          60 * start.getMinutes() +
          3600 * start.getHours();

     // calculate & format time left
     timeLeft =
          period(seconds)[0] * 3600 + period(seconds)[1] * 60 + 5 - seconds;
     timeLeft >= 43200 ? (x = 11) : (x = 12);
     timeLeftFormatted = new Date(timeLeft * 1000).toISOString().slice(x, 19);

     // display time left
     $("#time__left").html(timeLeftFormatted.replace(/:/g, "·"));
     document.title = timeLeftFormatted;

     // display current period
     $("#time__period").html(period(seconds)[2]);

     // display greeting
     greeting =
          seconds <= 43200
               ? "Good morning"
               : seconds <= 61200
               ? "Good afternoon"
               : seconds <= 72000
               ? "Good evening"
               : "Good night";
     $("#time__greeting").html(greeting);

     // display current date
     $("#time__date").html(
          (start.getMonth() + 1).toString() +
               "-" +
               ("0" + start.getDate().toString()).substr(-2) +
               "-" +
               start.getFullYear().toString().substr(2)
     );

     setTimeout(tick, 500);
})();
