// Get the current year
const currentYear = new Date().getFullYear();

// Put the year in the first paragraph
document.querySelector('footer p').textContent = '© Francisca Maxinho, Lisbon, Portugal ' + currentYear;

// Put the last modified date in the second paragraph
document.querySelectorAll('footer p')[1].textContent = 'Last Modified: ' + document.lastModified;
