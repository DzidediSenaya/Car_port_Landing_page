// Dropdown toggle for luxury heading
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const luxuryHeading = document.getElementById('luxury-heading');

dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
    
    // Check if the dropdown is visible
    if (dropdownMenu.classList.contains('show')) {
        luxuryHeading.style.display = 'none'; // Hide heading
    } else {
        luxuryHeading.style.display = 'block'; // Show heading
    }
});

// Navigation menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
});
