function openPopup() {
    document.getElementById("popup").style.display = "block";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function toggleStory(button) {
    let story = button.previousElementSibling;
    if (story.style.display === "none" || story.style.display === "") {
        story.style.display = "block";
        button.textContent = "Read Less";
    } else {
        story.style.display = "none";
        button.textContent = "Read More";
    }
}