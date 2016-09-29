var opacityIntervals = setTimeout(timer, 25000);
var opacityLevel = 0;
var setTimer;

function fade() {
    var button = document.getElementsByClassName("cd-optionals");
    button[0].style.opacity = "0";
    button[0].style.display = "initial";
    
    if (opacityLevel < 1)
        {
            opacityLevel += .2;
            var newOpacity = opacityLevel.toString();
            button[0].style.opacity = newOpacity;

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
        button[0].style.opacity ="1";
}


function timer() {
    setInterval(fade, 1000);
}