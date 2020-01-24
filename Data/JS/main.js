var index = [];
var imageIndexNum = [];
function initiateSlideshow() {
    index = [];
    var elements = document.getElementsByClassName("slideShow");
    for(var i = 0; i < elements.length; i++) {
        var localElements = elements[i].childNodes;
        console.log(localElements);

        var tempArray = [];
        for(var j = 1; j < localElements.length; j += 2) {
            tempArray.push(localElements[j]);
            localElements[j].style.display = "none";
        }
        index.push(tempArray);
        imageIndexNum.push(0);
    }
    slideshow();
    setInterval(slideshow, 2500);
}
function slideshow() {
    for(var slideshow = 0; slideshow < index.length; slideshow++) {
        for(var image = 0; image < index[slideshow].length; image++) {
            if(image == imageIndexNum[slideshow]) {
                index[slideshow][image].style.display = "block";
            } else {
                index[slideshow][image].style.display = "none";
            }
        }
        var tempImageNumber = imageIndexNum + 1;
        if(imageIndexNum < index[slideshow].length - 1) {
            imageIndexNum[slideshow]++;
        } else {
            imageIndexNum[slideshow] = 0;
        }
    }
}

function showMenu(parentNode) {
    if(parentNode.style.height != "3rem") {
        parentNode.style.height = "3rem";
        var childNodes = parentNode.getElementsByClassName("dropDownContent");
        for(var i = 0; i < childNodes.length; i++) {
            childNodes[i].style.transform = "scaleY(0)";
        }
    } else {
        parentNode.style.height = "max-content";
        var childNodes = parentNode.getElementsByClassName("dropDownContent");
        for(var i = 0; i < childNodes.length; i++) {
            childNodes[i].style.transform = "scaleY(1)";
        }
    }
}