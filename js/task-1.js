const categoriesEl = document.querySelectorAll('ul#categories .item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(el => console.log(
    `Category: ${el.firstElementChild.textContent}
    \nElements: ${el.lastElementChild.childElementCount}`
));