var opacityIntervals = setInterval(fade, 1000);
var opacityLevel = 1;
var setTimer;

function fade() {
    var button = document.getElementsByClassName("cd-special-optionals");
    if (opacityLevel > .1)
        {
            opacityLevel -= .3;
            var newOpacity = opacityLevel.toString();
            button[1].style.opacity = newOpacity;

                    /*
                    if((((opacityLevel / .2)*2)% 0)){
                        button[0].style.borderStyle = "solid";
                        button[1].style.borderStyle = "solid";
                        button[0].style.borderWidth = "5px";
                        button[1].style.borderWidth = "5px";
                        button[0].style.borderColor = "red";
                        button[1].style.borderColor = "red";
                    }
                    */

        }
    else
        
        button[1].style.display = "none";
}


function timer() {
    setTimer = setTimeout(opacityIntervals, 3000);
}