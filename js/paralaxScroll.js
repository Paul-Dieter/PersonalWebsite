// paralax scroll experience section:
window.addEventListener('scroll', function () {
    const experience = document.querySelector('.experience');
    const offset = window.pageYOffset;
    experience.style.backgroundPositionY = offset * 0.5 + 'px';
  });