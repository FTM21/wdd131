document.addEventListener('DOMContentLoaded', function() {
    // Display current year
    const yearSpan = document.getElementById('current-year');
    yearSpan.textContent = new Date().getFullYear();

    // Display last modified date
    const lastModifiedSpan = document.getElementById('last-modified');
    lastModifiedSpan.textContent = document.lastModified;

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show-menu');
        if (navMenu.classList.contains('show-menu')) {
            hamburger.innerHTML = '✖'; // Close symbol
        } else {
            hamburger.innerHTML = '&#9776;'; // Hamburger icon
        }
    });
});