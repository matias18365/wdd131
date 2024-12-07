document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.querySelector('#currentyear');
    const currentYear = new Date();
    yearSpan.innerText = currentYear.getFullYear();

    const lastModifiedSpan = document.querySelector('#lastModified');
    lastModifiedSpan.innerText = document.lastModified;


    displayWindChill();
});


function displayWindChill() {
    const temperature = 10;
    const windSpeed = 5;
    const windChillElement = document.querySelector('.weather p:last-of-type');


    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChill.toFixed(1)} °C`;
    } else {
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> N/A`;
    }
}

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (35.75 * speed**0.16) + (0.4275 * temp * speed**0.16);
}