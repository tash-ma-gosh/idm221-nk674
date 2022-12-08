function myFnc(e){

    var elem = document.getElementById("navID"),
    style = window.getComputedStyle(elem),
    right = style.getPropertyValue("right");

    if(right == "0px"){
        elem.style.right = "-60%"
    }else{
        elem.style.right ="0px"
    }
}

function hamburgerToggle(x) {
    x.classList.toggle("change");
}