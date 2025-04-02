AOS.init({ duration: 1200 });

tsParticles.load("particles-js", {
  particles: {
    number: { value: 120 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 2 },
    links: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.3
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 80 },
      push: { quantity: 4 }
    }
  },
  background: {
    color: "transparent"
  }
});

function showLoadingAndThen(action) {
  const loadingScreen = document.getElementById("loadingScreen");
  const loadingFill = document.getElementById("loadingFill");
  const loadingPercent = document.getElementById("loadingPercent");

  loadingScreen.classList.add("show");

  let progress = 0;

  const interval = setInterval(() => {
    // Increase progress randomly between 3–8%
    const step = Math.floor(Math.random() * 6) + 3;
    progress += step;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        action();
      }, 500); // brief pause after full
    }

    // Update bar + percent text
    loadingFill.style.width = progress + "%";
    loadingPercent.textContent = progress + "%";
  }, 250); // repeat every 0.25s
}



document.getElementById('yesBtn').addEventListener('click', () => {
  try { confetti(); } catch (e) { console.warn("Confetti failed."); }
  showLoadingAndThen(() => {
    window.location.href = 'https://wa.me/18765716535?text=Yes!%20I%27d%20love%20to%20be%20your%20friend!';
  });
});

document.getElementById('noBtn').addEventListener('click', () => {
  alert("That's okay, I'll be around if you change your mind!");
});

document.querySelectorAll('.reason').forEach(reason => {
  reason.addEventListener('click', () => {
    reason.classList.toggle('open');
  });
});

document.getElementById('noBtn').addEventListener('click', () => {
  const buttonContainer = document.querySelector('.buttons');
  buttonContainer.innerHTML = `
    <div class="sure-message">
      Are you sure? I'll buy you food...
      <br>
      <button id="secondChanceBtn">Okay fine, let’s be friends</button>
    </div>
  `;

  document.getElementById('secondChanceBtn').addEventListener('click', () => {
    try { confetti(); } catch (e) {}
    window.location.href = 'https://wa.me/18765716535?text=Okay%20fine%2C%20let%E2%80%99s%20be%20friends.';
  });
});

