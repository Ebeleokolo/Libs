// contact.js
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                email: this.email.value,
                subject: this.subject.value,
                message: this.message.value
            };

            console.log('Form submitted:', formData);
            // Add your form submission logic here
            // You might want to send this data to a server
            
            // Optional: Clear form after submission
            this.reset();
        });
    }
});