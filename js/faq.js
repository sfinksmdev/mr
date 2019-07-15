if(navigator.language.substring(0,2) == "es"){
  document.getElementById('en').style.display="none"
  document.getElementById('en-h').style.display="none"
  document.getElementById('en-f').style.display="none"
  document.getElementById('sp').style.display=""
  document.getElementById('sp-h').style.display=""
  document.getElementById('sp-f').style.display=""
} else {
  document.getElementById('en').style.display=""
  document.getElementById('en-h').style.display=""
  document.getElementById('en-f').style.display=""
  document.getElementById('sp').style.display="none"
  document.getElementById('sp-h').style.display="none"
  document.getElementById('sp-f').style.display="none"
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
