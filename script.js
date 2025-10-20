const listItems = document.querySelectorAll('li');

listItems.forEach(li => {
    li.querySelector('.li-header').addEventListener('click', () => {
        li.classList.toggle('active')
    });
});