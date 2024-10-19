window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
    }
});

// Burger menu functionality
const burger = document.getElementById('burger');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.add('active');
    burger.style.display = 'none';  // Hide burger menu
    closeBtn.style.display = 'block';  // Show close button
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeBtn.style.display = 'none';  // Hide close button
    burger.style.display = 'flex';  // Show burger menu again
});

// Close the menu when clicking a nav item
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        closeBtn.style.display = 'none';
        burger.style.display = 'flex';
    });
});
