// Load the navbar.html file and insert it into the navbar-container div
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data; // Insert the navbar content
        })
        .catch(error => console.error('Error loading navbar:', error)); // Log error if loading fails
}

document.addEventListener("DOMContentLoaded", loadNavbar); // Wait until the DOM is fully loaded before executing