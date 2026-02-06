let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    const music = document.getElementById("bgMusic");
    music.volume = 0.8;
    music.play().catch(() => {});
    musicStarted = true;
  }
}

function showSection(id) {
  startMusic();

  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function runAway(btn) {
  startMusic();
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

function showLove() {
  document.getElementById("finalLove").classList.remove("hidden");
}
