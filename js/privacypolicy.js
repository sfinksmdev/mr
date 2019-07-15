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
