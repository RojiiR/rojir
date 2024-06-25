// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
  
    // Constructing the email message
    var emailMessage = `
      Nama Lengkap: ${fullName}
      Email: ${email}
      Comments: ${comment}
    `;
  
    // Using fetch to submit the form data to Formspree
    fetch('https://formspree.io/your_email_here', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: emailMessage })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Clear form inputs after submission
      document.getElementById('fullName').value = '';
      document.getElementById('email').value = '';
      document.getElementById('comment').value = '';
      // Display success message
      var submitMessage = document.getElementById('submitMessage');
      submitMessage.textContent = 'Pesan Anda telah disubmit, terima kasih!';
    })
    .catch((error) => {
      console.error('Error:', error);
      // Display error message if submission fails
      var submitMessage = document.getElementById('submitMessage');
      submitMessage.textContent = 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.';
    });
  });