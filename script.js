$("#button").hover(function () {
    $("#button > .content").css("color", "black");
    $("#button").css("background", "#EEE");
}, function () {
    $("#button > .content").css("color", "white");
    $("#button").css("background", "black");
})

$(".arrow").hover(function () {
    $(".arrow").css("color", "black");
    $(".arrow").css("background", "#EEE");
}, function () {
    $(".arrow").css("color", "white");
    $(".arrow").css("background", "black");
})

$("#name").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
})

$("#button, #about").click(function () {
    $("html, body").animate({ scrollTop: window.innerHeight }, 500);
})

$("#solution").click(function () {
    $("html, body").animate({ scrollTop: window.innerHeight * 2 }, 500);
})
$("#hiw").click(function () {
    $("html, body").animate({ scrollTop: window.innerHeight * 3 }, 500);
})
$("#pricing").click(function () {
    $("html, body").animate({ scrollTop: window.innerHeight * 4 }, 500);
})

$(".arrow").click(function () {
    $("html, body").animate({ scrollTop: Math.floor((window.innerHeight + parseInt($("html").scrollTop())) / window.innerHeight) * window.innerHeight }, 500);
})

setInterval(function () {
    $(".stars").css("rotate", "0deg");
    $(".stars").animate({ rotate: "360deg" }, 1000);
}, 5000);

$(".stars").css("rotate", "0deg");
$(".stars").animate({ rotate: "360deg" }, 1000);