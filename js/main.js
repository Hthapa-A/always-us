function startLove() {
  const musicDiv = document.getElementById("musicPlayer");
  musicDiv.innerHTML = `
    <iframe width="0" height="0"
      src="https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1&rel=0"
      allow="autoplay; encrypted-media">
    </iframe>
  `;
  window.location.href = "timeline.html";
}

function runAway(btn) {
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

function showLove() {
  document.getElementById("finalLove").style.display = "block";
}

