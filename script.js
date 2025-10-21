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
li.classList.remove()
  })
})

const tocItems = document.querySelectorAll('.toc-item');
const knowledgeItems = document.querySelectorAll('.knowledge-list li');

tocItems.forEach(item => {
  const id = item.dataset.id;

  item.addEventListener('mouseenter', () => {
    const match = document.querySelector(`.knowledge-list li[data-id="${id}"]`);
    if (match) match.classList.add('highlight');
  });

  item.addEventListener('mouseleave', () => {
    const match = document.querySelector(`.knowledge-list li[data-id="${id}"]`);
    if (match) match.classList.remove('highlight');
    match.classList.remove('highlight');
    
  });

  item.addEventListener('click', () => {
    const match = document.querySelector(`.knowledge-list li[data-id="${id}"]`);
    if (match) {
      match.classList.add('active');
      setTimeout(() => match.classList.remove('highlight'), 2000);
    }
  });
});

