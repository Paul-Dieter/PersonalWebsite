const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

// Toggle the menu open/close when the burger icon is clicked
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active'); // Toggle the visibility of the burger icon
});

// Close the menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active'); // Optionally remove 'active' from the burger icon
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
});