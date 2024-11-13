document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedElement = document.getElementById("lastModified");
    const currentYearElement = document.getElementById("year");


    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = `© ${currentYear} Matias Gutierrez, Santa Cruz - Bolivia`;


    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate.toLocaleString()}`;
});