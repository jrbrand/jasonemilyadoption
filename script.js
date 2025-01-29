document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form submission handling
    const responseMessage = `Thank you, ${name}! Your message has been sent. We will contact you shortly.`;
    document.getElementById('response-message').innerText = responseMessage;

    // Clear the form fields
    this.reset();
});
