// Load particles effect from particles.json
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('✨ Particles loaded');
});

// Enable audio when user interacts
document.addEventListener('click', () => {
  const audio = document.getElementById('bg-audio');
  if (audio) {
    audio.muted = false;
    audio.play();
  }
});
