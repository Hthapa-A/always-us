function startLove() {
  if (!sessionStorage.getItem("musicStarted")) {
    const iframe = document.createElement("iframe");
    iframe.src = "music.html";
    iframe.style.display = "none";
    iframe.id = "bgMusic";
    document.body.appendChild(iframe);
    sessionStorage.setItem("musicStarted", "true");
  }
  window.location.href = "timeline.html";
}

function loadMusic() {
  if (sessionStorage.getItem("musicStarted") && !document.getElementById("bgMusic")) {
    const iframe = document.createElement("iframe");
    iframe.src = "music.html";
    iframe.style.display = "none";
    iframe.id = "bgMusic";
    document.body.appendChild(iframe);
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
