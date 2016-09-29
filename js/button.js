 document.getElementById('vid1').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        var button = document.getElementsByClassName("cd-optionals");
        button[0].style.display = "initial";
    }