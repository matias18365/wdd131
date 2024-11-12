const year = document.querySelector("#year");

const today = new Date();
year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastmod");
let oLastModif = new Date(document.lastModified);
lastModified.textContent = `Last Modification: ${oLastModif.toLocaleDateString()} ${oLastModif.toLocaleTimeString()}`;