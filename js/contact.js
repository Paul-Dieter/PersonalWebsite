const form = document.getElementById('contactForm');
  const notification = document.getElementById('notification');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from redirecting

    const formData = new FormData(form);

    fetch('https://formsubmit.co/pauldieter.brandt@yahoo.com', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          // Show notification
          notification.classList.add('show');
          setTimeout(() => {
            notification.classList.remove('show');
          }, 2000);

          // Reset the form
          form.reset();
        } else {
          console.error('Form submission failed');
        }
      })
      .catch(error => console.error('Error:', error));
  });