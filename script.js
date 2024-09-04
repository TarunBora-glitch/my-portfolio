document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(form);
      fetch('contact_form.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(result => {
          alert(result); // Show server response
          form.reset(); // Reset form fields
      })
      .catch(error => console.error('Error:', error));
  });
});
