const idrisId = document.getElementById('idris');

  // Add click event
  idrisId.addEventListener('click', () => {
    alert('https://github.com/Derainted');
  });

  const arrow = document.getElementById('arrow');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const section = document.getElementById('section2');
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  let arrowPosition = scrollTop - sectionTop;

  if (arrowPosition < 0) arrowPosition = 0;
  if (arrowPosition > sectionHeight - 30) arrowPosition = sectionHeight - 30;

  arrow.style.top = arrowPosition + 'px';
});
