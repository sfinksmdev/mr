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

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var str;
if(navigator.language.substring(0,2) == "es"){
  str="ss";
}
else{
  str="s";
}
var img = [document.getElementById(str+"1")];
var modalImg = document.getElementById("ms");
var captionText = document.getElementById("caption");
img.push(document.getElementById(str+"2"));


for (i = 0; i < 2; i++) {
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
