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

// JavaScript for Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



