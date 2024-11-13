const yearSpan = document.querySelector('#currentyear');
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();