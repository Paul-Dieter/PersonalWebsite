const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle the menu open/close when the burger icon is clicked
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
