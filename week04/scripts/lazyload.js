//This is for the footer to show the date of the last update.
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.querySelector('#currentyear');
    const currentYear = new Date();
    yearSpan.innerText = currentYear.getFullYear();

    const lastModifiedSpan = document.querySelector('#lastModified');
    lastModifiedSpan.innerText = document.lastModified;
});