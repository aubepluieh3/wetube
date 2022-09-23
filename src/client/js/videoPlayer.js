console.log("video player");
const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const musteBtn = document.getElementById("mute");
const time = document.getElementById("mute");
const volume = document.getElementById("volume");

const handlePlayClick = (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const handlePause = () => (playBtn.innerText = "Play");
const handlePlay = () => (playBtn.innerText = "Pause");
const handleMute = (e) => {};

playBtn.addEventListener("click", handlePlayClick);
musteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
