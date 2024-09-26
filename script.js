document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');
    const headerText = document.getElementById('header-text');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        // Toggle the header class based on menu state
        if (menu.classList.contains('active')) {
            headerText.classList.add('header-hidden'); // Hide header when menu is active
        } else {
            headerText.classList.remove('header-hidden'); // Show header when menu is not active
        }
    });
});
