let currentStep = 1;
let musicStarted = false;

function startMusic() {
  if (musicStarted) return;

  const music = document.getElementById("bgMusic");
  music.volume = 0.8;
  music.play().catch(() => {});
  musicStarted = true;
}

function nextStep() {
  startMusic();

  const current = document.getElementById(`step${currentStep}`);
  current.classList.remove("active");
  current.classList.add("hidden");

  currentStep++;

  const next = document.getElementById(`step${currentStep}`);
  next.classList.add("active");
}

function runAway(btn) {
  startMusic();
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 70 + "vw";
  btn.style.top = Math.random() * 70 + "vh";
}
