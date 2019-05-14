if(navigator.language.substring(0,2) == "en"){
  document.getElementById('english-h').style.display=""
  document.getElementById('english-c').style.display=""
  document.getElementById('english-f').style.display=""
  document.getElementById('spanish-h').style.display="none"
  document.getElementById('spanish-c').style.display="none"
  document.getElementById('spanish-f').style.display="none"
}
if(navigator.language.substring(0,2) == "es"){
  document.getElementById('english-h').style.display="none"
  document.getElementById('english-c').style.display="none"
  document.getElementById('english-f').style.display="none"
  document.getElementById('spanish-h').style.display=""
  document.getElementById('spanish-c').style.display=""
  document.getElementById('spanish-f').style.display=""
}
