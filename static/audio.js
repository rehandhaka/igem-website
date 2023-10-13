var playing = false;
const speak = () => {
  const message = document.querySelector("article").textContent;
  var speech = new SpeechSynthesisUtterance();
  var image = document.getElementById("play");
  //Set various utterance properties
  speech.lang = "en-US";
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  if (playing == false) {
    window.speechSynthesis.speak(speech);
    playing = true;
    image.src = "https://static.igem.wiki/teams/4428/wiki/stop2.svg";
  } else {
    window.speechSynthesis.cancel();
    playing = false;
    image.src = "https://static.igem.wiki/teams/4428/wiki/play3.svg";
  }
};
