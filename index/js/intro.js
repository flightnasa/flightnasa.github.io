var i = 0;
var arr = ["J", "Ju", "Jus", "Jusr", "Jus", "Jus", "Just", "Justu", "Just", "Justi", "Justin", "Justin<a>.</a>"];
setTimeout(function() {
    var tick = setInterval(function() {
        if(i > arr.length) {
            clearInterval(tick);
        }
        $("p").html(arr[i]);
        i++;
    }, 150);
}, 1e3);