const listItems = document.querySelectorAll('#list li');

listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'red';
});

    item.addEventListener('mouseout', () => {
        item.style.color = '';
    });   
})