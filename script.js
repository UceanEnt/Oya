// Initialize AOS animations
AOS.init({ duration: 1200 });

// Initialize tsParticles (Sparkle Background)
tsParticles.load("particles-js", {
  particles: {
    number: { value: 100 },
    shape: { type: "star" },
    size: { value: 2 },
    move: { speed: 0.5 },
    opacity: { value: 0.6 },
    color: { value: "#ffffff" },
    line_linked: { enable: false }
  }
});

// Button Actions
document.getElementById('yesBtn').addEventListener('click', () => {
  confetti();
  setTimeout(() => {
    window.location.href = 'https://wa.me/8765716535?text=Yes!%20I%27d%20love%20to%20be%20your%20friend!';
  }, 2500);
});

document.getElementById('noBtn').addEventListener('click', () => {
  alert("That's okay, I'll be around if you change your mind!");
});

