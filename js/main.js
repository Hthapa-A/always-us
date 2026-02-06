function startLove() {
  let music = document.getElementById("bgMusic");

  if (!music) {
    music = document.createElement("audio");
    music.src = "mp3.mp3";
    music.id = "bgMusic";
    music.loop = true;
    music.autoplay = true;
    music.volume = 0.8;
    document.body.appendChild(music);
  }

  sessionStorage.setItem("musicStarted", "true");

  music.play().catch(() => {
    console.log("Autoplay blocked until user interaction");
  });

  setTimeout(() => {
    window.location.href = "timeline.html";
  }, 700);
}

function loadMusic() {
  if (sessionStorage.getItem("musicStarted")) {
    let music = document.getElementById("bgMusic");

    if (!music) {
      music = document.createElement("audio");
      music.src = "mp3.mp3";
      music.id = "bgMusic";
      music.loop = true;
      music.autoplay = true;
      music.volume = 0.8;
      document.body.appendChild(music);
      music.play().catch(() => {});
    }
  }
}

function runAway(btn) {
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

function showLove() {
  document.getElementById("finalLove").classList.remove("hidden");
}
