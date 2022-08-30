document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.g-player')
  const video = document.getElementById('video');
  const playVideo = document.getElementById('play-video');
  const stopVideo = document.getElementById('stop-video');
  const muteVideo = document.getElementById('mute-video');

  playVideo?.addEventListener('click', () => {
    video.play()
    wrapper?.classList.add('g-player--played')
  });

  stopVideo?.addEventListener('click', () => {
    video.pause()
    wrapper?.classList.remove('g-player--played')
  });

  muteVideo?.addEventListener('click', () => {
    video.muted = !video.muted;
  });
})