document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form input values
        var name = document.querySelector('input[type="text"][placeholder="Enter your name"]').value;
        var email = document.querySelector('input[type="text"][placeholder="Enter your email"]').value;
        var message = document.querySelector('textarea').value;

        // Validate input (you can add more validation if needed)

        // Display the entered values (you can replace this with AJAX submission)
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Optionally, reset the form after submission
        form.reset();
    });
});