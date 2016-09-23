var myVar = setInterval(myTimer, 1000);
var opacityLevel = 1;

function myTimer() {
     var button = document.getElementsByClassName("cd-optionals");
    
    if (opacityLevel > 0)
        {
            opacityLevel -= .1;
            var newOpacity = opacityLevel.toString();
        }
    
    if((opacityLevel / 2) == 0){
        button[0].style.borderStyle = "solid";
        button[1].style.borderStyle = "solid";
        button[0].style.borderWidth = "5px";
        button[1].style.borderWidth = "5px";
        button[0].style.borderColor = "red";
        button[1].style.borderColor = "red";
    }
    
    button[0].style.opacity = newOpacity;
    button[1].style.opacity = newOpacity;
}