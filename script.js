
const listItems = document.querySelectorAll('.knowledge-list li');
const buttons = document.querySelectorAll('.dropdown-btn');

listItems.forEach(li => {
  li.querySelector('.li-header').addEventListener('click', () => {
    li.classList.toggle('active');
  });
});

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const li = btn.closest('li');
    li.classList.toggle('active');
  });
});




