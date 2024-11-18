// Task 6: JavaScript for Form Validation and Feedback
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the form (check if fields are empty)
    if (name && email && message) {
        document.getElementById('form-feedback').innerHTML = '<p style="color: green;">Thank you for your message, ' + name + '! I will get back to you soon.</p>';
        document.getElementById('contact-form').reset();  // Reset the form after submission
    } else {
        document.getElementById('form-feedback').innerHTML = '<p style="color: red;">Please fill in all the fields before submitting.</p>';
    }
});
