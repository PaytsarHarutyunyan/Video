const video = document.getElementById("my-video");
const playPauseButton = document.getElementById("play-pause-button");

playPauseButton.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

video.addEventListener("timeupdate", function() {
  const currentMinutes = Math.floor(video.currentTime / 60);
  const currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
  const durationMinutes = Math.floor(video.duration / 60);
  const durationSeconds = Math.floor(video.duration - durationMinutes * 60);

  currentTime.textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;
  duration.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
});




