const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const nameInput = document.getElementById("name");

openPopupButton.addEventListener("click", function() {
    popup.style.display = "flex";
    nameInput.focus(); // Set focus on the name input field
});

closePopupButton.addEventListener("click", function() {
    popup.style.display = "none";
});

// Close the popup when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
