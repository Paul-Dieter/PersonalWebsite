const form = document.querySelector('.contact-form'); // Add this class to your form if not already present
const notification = document.getElementById('notification');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Show notification
  notification.classList.add('show');
  
  // Hide notification after 2 seconds
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
  
  // Optional: Reset form
  form.reset();
});

