const form = document.getElementById('contactForm');
const notification = document.getElementById('notification');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Optionally send the form data via fetch (if you want to keep FormSubmit)
  const formData = new FormData(form);
  fetch(form.action, {
    method: form.method,
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