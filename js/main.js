document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const desktopNav = document.querySelector('.desktop-nav');

    menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        desktopNav.classList.toggle('active');
        console.log('Menu clicked');
    });

    // Close menu when clicking a link (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                desktopNav.classList.remove('active');
            }
        });
    });
});