// Function to calculate windchill factor
function calculateWindChill(temp, speed) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
}

// Static values matching the displayed content
const temperature = 45; // Example temperature in °F
const windSpeed = 10;   // Example wind speed in mph
const conditions = "Sunny"; // Example weather conditions

// Get elements from the document
const windChillElement = document.getElementById('wind-chill');
const temperatureElement = document.getElementById('temperature');
const conditionsElement = document.getElementById('conditions');
const windSpeedElement = document.getElementById('wind-speed');

// Set static values in the respective elements
temperatureElement.textContent = `${temperature}°F`;
conditionsElement.textContent = conditions;
windSpeedElement.textContent = `${windSpeed} mph`;

// Check if conditions are met for calculating windchill
if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    // Display the calculated windchill factor in the specified HTML element
    windChillElement.textContent = windChill.toFixed(1) + '°F';
} else {
    // If conditions are not met, display 'N/A'
    windChillElement.textContent = 'N/A';
}

// Update footer with the current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;