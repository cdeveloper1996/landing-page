
var getWidth;
var myDOM = document.getElementById("getWidth");
var appendDOM = document.createElement("p");

function getCurrentWidth() {
    getWidth = window.innerWidth;
    appendDOM.innerHTML = getWidth.toString();
    myDOM.appendChild(appendDOM);
}

// window.addEventListener("resize", getCurrentWidth);
// getCurrentWidth();
