
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
            threshold: 0.5,
            rootMargin: '50px'
        }
    );
  
    // Observe both experience and projects sections
    const sections = document.querySelectorAll('.experience, .projects');
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
  
    // Observe both experience and projects sections
    const sections = document.querySelectorAll('.contact');
    sections.forEach(section => {
        if (section) {
            observer.observe(section);
        }
    });
  });