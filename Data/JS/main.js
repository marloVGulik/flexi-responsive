function activateDropDown(id) {
    var elements = document.getElementsByClassName(id);
    var remove = false;
    if(elements[0] != undefined) {
        if(elements[0].style.display == "block") {
            remove = true;
        }
    }
    for(var i = 0; i < elements.length; i ++) {
        if(remove) {
            elements[i].style.display = "none";
        } else {
            elements[i].style.display = "block";
        }
    }
}