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
  
  /*contact form clear after send  */

  const form = document.getElementById('contactForm');
const notification = document.getElementById('notification');

form.addEventListener('submit', function(e) {
    // Don't prevent default since we want the form to actually submit to formsubmit.co
    
    // Show notification
    notification.classList.add('show');
    
    // Clear form inputs after a brief delay to ensure the form submission goes through
    setTimeout(() => {
        // Clear all inputs and textarea
        form.reset();
        
        // Hide notification
        notification.classList.remove('show');
    }, 2000);
});

//Prevent verticle and horizontal drag at same time


const carousel = document.querySelector('.carousel-track');
let isDragging = false, startX, scrollLeft;

carousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchend', () => {
    isDragging = false;
});

carousel.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX - carousel.offsetLeft;
    const y = e.touches[0].pageY;

    const walkX = (x - startX) * 2; // Horizontal movement
    const walkY = Math.abs(y - startX); // Vertical movement

    // Only prevent vertical scroll if horizontal movement is stronger
    if (Math.abs(walkX) > walkY) {
        e.preventDefault(); // Disable vertical scroll during horizontal drag
        carousel.scrollLeft = scrollLeft - walkX;
    }
});
