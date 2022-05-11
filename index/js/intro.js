var i = 0,
arr = ["J","Ju","Jus","Jusr","Jus","Just","Justu","Just","Justi","Justin","Justin","Justin","Justin","Justin","Justin","Justin","Justin<a>.</a>"];
setTimeout((function() {
    var t = setInterval((function() {
        i > arr.length && clearInterval(t), 
        $("p").html(arr[i]),i++}), 150)}), 1e3);
