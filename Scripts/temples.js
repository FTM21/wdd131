// ===== temples.js - Hamburger Menu & Footer Dates =====

/* ---------- Hamburger Menu Toggle ---------- */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('open');

    // Swap hamburger symbol and X
    if (hamburger.classList.contains('open')) {
        hamburger.innerHTML = '&#10005;'; // ✕ (X symbol)
    } else {
        hamburger.innerHTML = '&#9776;';  // ☰ (hamburger)
    }
});

/* ---------- Footer: Current Year ---------- */
const currentYearSpan = document.getElementById('currentYear');
const now = new Date();
currentYearSpan.textContent = now.getFullYear();

/* ---------- Footer: Last Modified Date ---------- */
const lastModifiedPara = document.getElementById('lastModified');
lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
