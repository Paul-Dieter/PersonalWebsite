/* About section transition */

    // Handle header background on scroll
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroHeight = hero.offsetHeight;
        
        // Add/remove scrolled class based on scroll position
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Add parallax effect to hero
        hero.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        hero.style.opacity = 1 - (scrollPosition / heroHeight);
    });

//about background fade

const aboutobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      } else {
          entry.target.classList.remove('visible');
      }
  });
}, {
  threshold: 0.9,
  rootMargin: '50px'
});

const aboutSection = document.querySelector('.about');
if (aboutSection) {
  aboutobserver.observe(aboutSection);
}

//skills background fade

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      } else {
          entry.target.classList.remove('visible');
      }
  });
}, {
  threshold: 0.5,
  rootMargin: '50px'
});

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
  observer.observe(skillsSection);
}

//experience background fade

document.addEventListener('DOMContentLoaded', () => {
  const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '50px'
  });

  const experienceSection = document.querySelector('.experience');
  if (experienceSection) {
    experienceObserver.observe(experienceSection);
  }
});


//contact background fade

const contactobserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
  }, {
    threshold: 0.5,
    rootMargin: '10px'
  });
  
  const contactSection = document.querySelector('.contact');
  if (contactSection) {
    contactobserver.observe(contactSection);
  }