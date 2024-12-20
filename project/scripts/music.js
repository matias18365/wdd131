//This is for the footer to show the date of the last update.
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.querySelector('#currentyear');
    const currentYear = new Date();
    yearSpan.innerText = currentYear.getFullYear();

    const lastModifiedSpan = document.querySelector('#lastModified');
    lastModifiedSpan.innerText = document.lastModified;
});


const recommendations = [
    { title: "A Tear in Space", artist: "Glass Animals" },
    { title: "What Was I Made For?", artist: "Billie Eilish" },
    { title: "You & Me - Flume Remix", artist: "Flume" },
];


function displayRecommendations() {
    const recommendationList = document.getElementById("recommendation-list");
    recommendations.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.title} by ${item.artist}`;
        recommendationList.appendChild(listItem);
    });
}


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value; 
    const email = document.getElementById("email").value; 
    const message = document.getElementById("message").value; 

    const formData = {
        name,
        email,
        message
    };

    localStorage.setItem("contactData", JSON.stringify(formData));

    document.getElementById("contact-form").reset();

    alert("Thank you for your message, " + name + "! We will get back to you soon.");
});

if (document.getElementById("recommendation-list")) {
    displayRecommendations();
}