const buttons = document.querySelectorAll('.dropdown-btn');
const closeButtons = document.querySelectorAll('.close-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const li = btn.closest('li');
    li.classList.toggle('active');
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
e.stopPropagation();
const li = btn.closest('li');
li.classList.toggle('active');
li.classList.remove();
  });
});
