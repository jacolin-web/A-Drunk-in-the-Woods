var button = document.getElementsByClassName("cd-optionals");
        var opacityIntervals = setTimeout(timer, 29000);
        var opacityLevel = 1;
        var setTimer;

        function fade() {
             button[0].style.display = "initial";
            button[1].style.display = "initial";
            if (opacityLevel > .1)
                {
                    opacityLevel -= .3;
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
                button[0].style.display = "none";
        }


        function timer() {
            
            setTimer = setInterval(fade, 1000);
        }