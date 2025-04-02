// Script for scrolling effects

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }});
    }, {
        threshold: 0.25 
    });

const scrollElements = document.querySelectorAll('.section');
scrollElements.forEach((el) => observer.observe(el));


