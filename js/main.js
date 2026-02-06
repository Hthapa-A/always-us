const runawayButtons = document.querySelectorAll('.runaway');

runawayButtons.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
  });
});
