const listItems = document.querySelectorAll('.social-icons li');

listItems.forEach((item, i) => {
    item.style.setProperty('--i', i);
});