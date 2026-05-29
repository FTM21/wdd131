
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    const isOpen = navMenu.classList.contains('show');

    // Swap hamburger ☰ and close ✕ symbols
    hamburger.innerHTML = isOpen ? '&#10005;' : '&#9776;';
});


/* ---------- Footer: Current Year ---------- */
const currentYearSpan = document.getElementById('currentYear');
currentYearSpan.textContent = new Date().getFullYear();

const lastModifiedDateSpan = document.getElementById('lastModifiedDate');
lastModifiedDateSpan.textContent = document.lastModified;