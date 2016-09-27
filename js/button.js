var myVar = setInterval(fade, 1000);
var opacityLevel = 1;

function fade() {
     var button = document.getElementsByClassName("cd-optionals");
    
    if (opacityLevel > .1)
        {
            opacityLevel -= .1;
            var newOpacity = opacityLevel.toString();
            button[0].style.opacity = newOpacity;
            button[1].style.opacity = newOpacity;
            
            /*
            if((opacityLevel / .2) == 0){
                button[0].style.borderStyle = "solid";
                button[1].style.borderStyle = "solid";
                button[0].style.borderWidth = "5px";
                button[1].style.borderWidth = "5px";
                button[0].style.borderColor = "red";
                button[1].style.borderColor = "red";
            }
            */
        }
    else(window.location.pathname = "/A Drunk in the Woods/storyline/scene2.html");
    
    
}