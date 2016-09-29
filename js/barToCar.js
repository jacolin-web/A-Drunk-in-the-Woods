var opacityIntervals = setInterval(fade, 1000);
var opacityLevel = 1;
var setTimer;

function fade() {
     var button = document.getElementsByClassName("cd-optionals");
    
    if (opacityLevel > .1)
        {
            opacityLevel -= .1;
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
    if(opacityLevel == 0){
        button[0].attr = ("src", " ")
    }
}


function timer() {
    setTimer = setTimeout(opacityIntervals, 40000);
}