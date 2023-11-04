var clickCount = 0;

var start = false;


function startCheck() {

    if (start == false) {

        start = true;

        setInterval(function() {
            clickCount = 0;
        }, 2000);

        $(".btn").on("click", function() {
            clickCount++;
            animatePress();
            console.log(clickCount);
            display(clickCount);
        });

    }
    else {
    }

}
startCheck();

function display(clickCount) {
    $(".display").text(clickCount);
}


function animatePress() {
    $(".btn").addClass("pressed")
    setTimeout(function() {
        $(".btn").removeClass("pressed")
    }, 100);
}