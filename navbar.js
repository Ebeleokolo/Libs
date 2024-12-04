document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {

            console.log('Menu button clicked');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});