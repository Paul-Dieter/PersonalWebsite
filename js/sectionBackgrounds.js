
//Project background

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.8,
            rootMargin: '100px'
        }
    );
  
    // Observe both experience and projects sections
    const sections = document.querySelectorAll('.experience, .projects,.certifications, .skills, .about');
    sections.forEach(section => {
        if (section) {
            observer.observe(section);
        }
    });
  });
  
  //contact  backgroud : 
  
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '50px'
        }
    );
  

    const sections = document.querySelectorAll('.contact');
    sections.forEach(section => {
        if (section) {
            observer.observe(section);
        }
    });
  });

  //certification
  // Intersection Observer for fade-in effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add visible class to all cards within the section
            if (entry.target.classList.contains('certifications')) {
                const cards = entry.target.querySelectorAll('.certification-card');
                cards.forEach(card => card.classList.add('visible'));
            }
        }
    });
}, { threshold: 0.1 });

// Observe the certifications section
const section = document.querySelector('.certifications');
observer.observe(section);