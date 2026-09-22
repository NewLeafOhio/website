document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.learn-more');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const details = this.closest('.service').querySelector('.details'); // Get the <ul> within the same service div
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block"; // Show the details
                this.textContent = "Show Less"; // Change button text
            } else {
                details.style.display = "none"; // Hide the details
                this.textContent = "Details"; // Change button text back
            }
        });
    });
});
