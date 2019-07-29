function showToggle() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " active";
    } else {
        x.className = "nav";
    }
    document.getElementById("hide").style.display = "block";
    document.getElementById("hide").style.cursor = "pointer";
    document.getElementById("show").style.display = "none";
}
function hideToggle() {
    var x = document.getElementById("nav");
    if (x.className === "nav active") {
        x.className = "nav";
    }
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "block";
}
