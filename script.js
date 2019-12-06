$(document).ready(function() {

    var $id = document.getElementById.bind(document);

    var value = 0;
    var setProgress = setInterval(load, 70);
    
    $("#doc-container").fadeToggle();
    
    
    function load() {
        if (value == 100) {
            clearInterval(setProgress);
            $("#doc-container").css('opacity', '1');
            $("#progress-container-2").delay(500).fadeToggle(1200);
            $("#doc-container").delay(1500).fadeToggle(1200);
            $("#loading").text('Loading ');
            $("#dots").text('Complete.');
            alert("Welcome, fellow Camper! ;)");
        } else {
            value++;
            $id("progress").value = value;
            $id("progressFigure").innerHTML = value + "%";
        }
    };
    
    var blink = setInterval(blink, 950);
    
    
    function blink() {
        if ($("#dots").text() == "...")
            $("#dots").text(".");
        else if ($("#dots").text() == "." || $("#dots").text() == "..") {
            $id("dots").innerHTML += ".";
        }
        if ($("#dots").text() == "Complete.")
            clearInterval(blink);
        else
            $("#loading, #dots").animate({opacity: 0.3}, 600).animate({opacity: 1}, 300);
    };
});
