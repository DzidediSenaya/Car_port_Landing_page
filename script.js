// script.js

// Dropdown toggle for the dropdown menu
const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const luxuryHeading = document.getElementById('luxury-heading');

// Show or hide the dropdown menu
dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show'); // Toggle dropdown visibility
    
    // Hide or show the heading based on dropdown state
    if (dropdownMenu.classList.contains('show')) {
        luxuryHeading.style.display = 'none'; // Hide heading when dropdown is open
    } else {
        luxuryHeading.style.display = 'block'; // Show heading when dropdown is closed
    }
});

// Navigation menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active'); // Toggle navigation menu visibility
    
    // Optionally hide the dropdown if the nav menu is opened
    dropdownMenu.classList.remove('show'); // Close dropdown if nav menu is opened
    luxuryHeading.style.display = 'block'; // Ensure the heading is shown
});
