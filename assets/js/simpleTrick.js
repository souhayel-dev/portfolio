const btn = document.getElementById('simple-trick');
let moved = false;

btn.addEventListener('mouseenter', () => {
  if (!moved) {
    btn.style.transform = 'translateX(400px)';
    btn.style.transition = 'transform 0.3s ease';
    moved = true;
  } else {
    btn.style.transform = 'translateX(0)';
    moved = false;
  }
});