const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

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

//draggable carousel effect

document.addEventListener('DOMContentLoaded', () => {
  const carousel = {
    // Elements
    container: document.querySelector('.carousel-container'),
    track: document.querySelector('.carousel-track'),
    cards: document.querySelectorAll('.project-card'),
    prevBtn: document.querySelector('.carousel-button.prev'),
    nextBtn: document.querySelector('.carousel-button.next'),

    // State
    isDragging: false,
    startPosition: 0,
    currentTranslate: 0,
    previousTranslate: 0,
    currentIndex: 0,
    animationID: 0,

    // Initialize carousel
    init() {
      // Mouse events
      this.track.addEventListener('mousedown', this.dragStart.bind(this));
      document.addEventListener('mousemove', this.drag.bind(this));
      document.addEventListener('mouseup', this.dragEnd.bind(this));
      
      // Touch events
      this.track.addEventListener('touchstart', this.dragStart.bind(this));
      document.addEventListener('touchmove', this.drag.bind(this));
      document.addEventListener('touchend', this.dragEnd.bind(this));
      
      // Navigation buttons
      this.prevBtn.addEventListener('click', () => this.slide('prev'));
      this.nextBtn.addEventListener('click', () => this.slide('next'));
      
      // Prevent context menu on long press
      this.track.addEventListener('contextmenu', e => e.preventDefault());
      
      // Prevent image drag
      this.track.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', e => e.preventDefault());
      });

      // Initial button state
      this.updateButtons();
      
      // Handle window resize
      window.addEventListener('resize', this.handleResize.bind(this));
    },

    // Get position from mouse or touch event
    getPosition(event) {
      return event.type.includes('mouse') 
        ? event.pageX 
        : event.touches[0].clientX;
    },

    // Handle drag start
    dragStart(event) {
      this.isDragging = true;
      this.startPosition = this.getPosition(event) - this.currentTranslate;
      this.track.classList.add('dragging');
      this.animationID = requestAnimationFrame(this.animation.bind(this));
    },

    // Handle dragging
    drag(event) {
      if (!this.isDragging) return;
      event.preventDefault();
      const currentPosition = this.getPosition(event);
      this.currentTranslate = currentPosition - this.startPosition;
    },

    // Handle drag end
    dragEnd() {
      this.isDragging = false;
      this.track.classList.remove('dragging');
      cancelAnimationFrame(this.animationID);

      const movedBy = this.currentTranslate - this.previousTranslate;
      
      // Determine if slide should change based on drag distance
      if (Math.abs(movedBy) > 100) {
        if (movedBy < 0) {
          this.currentIndex = Math.min(this.currentIndex + 1, this.cards.length - 1);
        } else {
          this.currentIndex = Math.max(this.currentIndex - 1, 0);
        }
      }

      this.slide('current');
    },

    // Animation loop
    animation() {
      if (this.isDragging) {
        this.setSlidePosition();
        requestAnimationFrame(this.animation.bind(this));
      }
    },


// Set slide position
setSlidePosition() {
    const containerWidth = this.track.offsetWidth; // Get the container width
    const cardWidth = this.cards[0].offsetWidth + 32; // Including gap
    const totalWidth = cardWidth * this.cards.length; // Total width of all the cards
    const maxTranslate = 0;
    const minTranslate = -(totalWidth - containerWidth);
  
    this.currentTranslate = Math.max(
      Math.min(this.currentTranslate, maxTranslate),
      minTranslate
    );
  
    this.track.style.transform = `translateX(${this.currentTranslate}px)`;
  },
  
  

    // Handle sliding
    slide(direction) {
      const cardWidth = this.cards[0].offsetWidth + 32; // Including gap
      
      switch(direction) {
        case 'prev':
          if (this.currentIndex > 0) {
            this.currentIndex--;
          }
          break;
        case 'next':
          if (this.currentIndex < this.cards.length - 1) {
            this.currentIndex++;
          }
          break;
      }

      this.currentTranslate = -(cardWidth * this.currentIndex);
      this.previousTranslate = this.currentTranslate;
      this.setSlidePosition();
      this.updateButtons();
    },

    // Update button states
    updateButtons() {
      this.prevBtn.disabled = this.currentIndex === 0;
      this.nextBtn.disabled = this.currentIndex === this.cards.length - 1;
      this.prevBtn.style.opacity = this.prevBtn.disabled ? '0.5' : '1';
      this.nextBtn.style.opacity = this.nextBtn.disabled ? '0.5' : '1';
    },

    // Handle window resize
    handleResize() {
      this.slide('current');
    }
  };

  // Initialize the carousel
  carousel.init();
});