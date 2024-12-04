// about.js
document.addEventListener('DOMContentLoaded', function() {
    const engageButton = document.querySelector('.engage-button');
    
    if (engageButton) {
        engageButton.addEventListener('click', function() {
            // Add your engagement functionality here
            // For example, scroll to contact form or open a modal
            window.location.href = 'contact.html';
        });
    }
});