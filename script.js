document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const menu = document.getElementById('nav-menu');
        menu.classList.toggle('active');
        console.log('Menu toggle clicked!');
    });
});
