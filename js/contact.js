document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  var formData = new FormData(this);
  
  fetch(this.action, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    const notification = document.getElementById('notification');
    if (response.ok) {
      // Show success notification
      notification.textContent = 'Message sent successfully!';
      notification.style.background = '#4CAF50'; // Green
      notification.classList.add('show');
    } else {
      // Show error notification
      notification.textContent = 'An error occurred. Please try again later.';
      notification.style.background = '#f44336'; // Red
      notification.classList.add('show');
    }
    
    // Hide the notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  })
  .catch(error => {
    const notification = document.getElementById('notification');
    notification.textContent = 'An error occurred. Please try again later.';
    notification.style.background = '#f44336'; // Red
    notification.classList.add('show');
    
    // Hide the notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  });
});