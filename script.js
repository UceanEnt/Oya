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
function showLoadingAndThen(action) {
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.classList.add("show");

  setTimeout(() => {
    action();
  }, 2500);
}

document.getElementById('yesBtn').addEventListener('click', () => {
  try { confetti(); } catch (e) { console.warn("Confetti failed."); }
  showLoadingAndThen(() => {
    window.location.href = 'https://wa.me/8765716535?text=Yes!%20I%27d%20love%20to%20be%20your%20friend!';
  });
});

document.getElementById('noBtn').addEventListener('click', () => {
  showLoadingAndThen(() => {
    alert("That's okay, I'll be around if you change your mind!");
  });
});
