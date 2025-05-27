// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    return (temperature <= 10 && windSpeed > 4.8) ? 
           Math.round(13.12 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)) :
           "N/A";
}

// Static values for temperature and wind speed
const temperature = 5; // in °C
const windSpeed = 10; // in km/h

// Displaying wind chill on page load
document.addEventListener("DOMContentLoaded", function() {
    const windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").textContent = `Wind Chill: ${windChillValue}°C`;
    
    // Footer dynamic content
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();
    
    document.getElementById("current-year").textContent = currentYear;
    document.getElementById("last-modified").textContent = lastModifiedDate;
});