/*
https://api.adviceslip.com/advice --advice generator API
https://api.mymemory.translated.net --translate API
*/

window.advicenumber = 0;

document.getElementById("generateadvice").onclick = function() {
  fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then(data => {
    //console.log(data.slip.advice)
    document.getElementById("advice").innerText = data.slip.advice;
    window.advicenumber = window.advicenumber + 1;
    document.getElementById("advicecounter").innerText = "Advice #" + window.advicenumber;
  })
}

document.getElementById("translate").onclick = function() {
  var value = document.getElementById("advice").innerText;
  if (value) {
    fetch("https://api.mymemory.translated.net/get?q=" + value + "&langpair=en|ar")
    .then(res => res.json())
    .then(data => {
      //console.log(data.responseData.translatedText)
      document.getElementById("advice").innerText = data.responseData.translatedText;
    })
  }
}

document.getElementById("copy").onclick = function() {
  var value = document.getElementById("advice").innerText;
  navigator.clipboard.writeText(value);
  alert("Copied!")
}