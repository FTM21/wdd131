// ── Footer: current year & last modified ──
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// ── Wind Chill Calculation (Imperial: °F & mph) ──
// Static values matching the page's displayed weather
const temperatureF = 28;   // °F
const windSpeedMph = 12;   // mph

/**
 * calculateWindChill – returns the wind chill index (°F)
 * Formula: Wind Chill = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
 * @param {number} temp  – temperature in °F
 * @param {number} speed – wind speed in mph
 * @returns {number} wind chill in °F (rounded)
 */
function calculateWindChill(temp, speed) {
  return parseFloat((35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed(1));
}

// Only calculate if conditions are met (temp <= 50°F AND wind > 3 mph)
const windChillEl = document.getElementById("wind-chill");
if (temperatureF <= 50 && windSpeedMph > 3) {
  windChillEl.textContent = calculateWindChill(temperatureF, windSpeedMph) + "°F";
} else {
  windChillEl.textContent = "N/A";


}