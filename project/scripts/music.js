//This is for the footer to show the date of the last update.
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.querySelector('#currentyear');
    const currentYear = new Date();
    yearSpan.innerText = currentYear.getFullYear();

    const lastModifiedSpan = document.querySelector('#lastModified');
    lastModifiedSpan.innerText = document.lastModified;
});


document.addEventListener("DOMContentLoaded", function() {

    const recommendations = [
        { title: "A Tear in Space", artist: "Glass Animals" },
        { title: "What Was I Made For?", artist: "Billie Eilish" },
        { title: "You & Me - Flume Remix", artist: "Flume" },
        { title: "Creatures in Heaven", artist: "Glass Animals" },
        { title: "Bored", artist: "Billie Eilish" },
        { title: "Never Be Like You", artist: "Flume" },
        { title: "The Other Side of the Paradise", artist: "Glass Animals" },
        { title: "Getting Older", artist: "Billie Eilish" },
        { title: "Drop the Game", artist: "Flume" },
        { title: "Helium", artist: "Glass Animals" },
        { title: "Blue", artist: "Billie Eilish" },
        { title: "The Difference", artist: "Flume" },
    ];

    function displayRecommendations() {
        const recommendationList = document.getElementById("recommendation-list");
        if (recommendationList) {
            recommendations.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `${item.title} by ${item.artist}`;
                recommendationList.appendChild(listItem);
            });
        }
    }

    displayRecommendations();
});


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