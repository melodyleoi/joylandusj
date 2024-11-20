// Function to load footer.html into the footer-container div
function loadFooter() {
    // Fetch the footer.html file
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the footer content into the footer-container div
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            // Log error and display a fallback message
            console.error('Error loading footer:', error);
            document.getElementById('footer-container').innerHTML = `
                <p style="color: red; text-align: center;">
                    Footer failed to load. Please refresh the page or contact the administrator.
                </p>
            `;
        });
}

// Wait until the DOM is fully loaded before executing the footer loading
document.addEventListener("DOMContentLoaded", loadFooter);
