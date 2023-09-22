let song = document.getElementById("song");
let progress = document.getElementById("progress");
let playPauseBtn = document.getElementById("play-pause");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (playPauseBtn.classList.contains("fa-pause")) {
    song.pause();
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
  } else {
    song.play();
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  playPauseBtn.classList.remove("fa-play");
  playPauseBtn.classList.add("fa-pause");
};
