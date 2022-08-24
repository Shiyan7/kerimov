document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('video');
  const playVideo = document.getElementById('play-video');
  const stopVideo = document.getElementById('stop-video');
  const muteVideo = document.getElementById('mute-video');

  playVideo?.addEventListener('click', () => {
    video.play()
  });

  stopVideo?.addEventListener('click', () => {
    video.pause()
  });

  muteVideo?.addEventListener('click', () => {
    video.muted = !video.muted;
  });
})