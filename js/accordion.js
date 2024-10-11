document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion');
    
    if (accordionItems) {
        accordionItems.forEach((accordion) => {
            accordion.addEventListener('click', (e) => toggleAccordion(e, accordionItems));
        });
    }
});

const toggleAccordion = (e, accordionItems) => {
    let target = e.currentTarget;
    if (!target.classList.contains('accordion--expand')) {
        accordionItems.forEach((item) => {
            item.classList.remove('accordion--expand');
        });
        target.classList.add('accordion--expand');
    } else {
        target.classList.remove('accordion--expand');
    }
};


