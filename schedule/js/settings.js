// ! IN DIRE NEED OF REWORKING

let activated = false;

function settings() {
     activated = !activated;
     activated ? (x = "-1.25vw") : (x = "8vw");
     $("#settings__icon").toggleClass("rotated");
     $("#settings__list").animate(
          {
               right: x,
          },
          1000
     );
}

function light() {
     $("#settings__list__mode--light").addClass("bold");
     $("#settings__list__mode--dark").removeClass("bold");
     $("body").get(0).style.setProperty("--background", "#fcfcfc");
     $("body").css("color", "#0c0c0c");
     $("#settings__icon").attr("src", "/schedule/src/img/settings.png");
     localStorage.setItem("mode", "light");
}

function dark() {
     $("#settings__list__mode--light").removeClass("bold");
     $("#settings__list__mode--dark").addClass("bold");
     $("body").get(0).style.setProperty("--background", "#0c0c0c");
     $("body").css("color", "#fcfcfc");
     $("#settings__icon").attr("src", "/schedule/src/img/settings-invert.png");
     localStorage.setItem("mode", "dark");
}

if ("mode" in localStorage) {
     localStorage.getItem("mode") == "light" ? light() : dark();
}
