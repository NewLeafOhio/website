

// Toggle mobile menu visibility
document.querySelector('.menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var expanded = this.getAttribute('aria-expanded') === 'true';
    
    menu.classList.toggle('active');
    this.setAttribute('aria-expanded', !expanded);
});

// Add mobile menu items dynamically
window.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav a');
    var mobileMenu = document.getElementById('menu');

    navLinks.forEach(function(link) {
        var listItem = document.createElement('li');
        listItem.appendChild(link.cloneNode(true)); // Clone the link and add it to the list item
        mobileMenu.appendChild(listItem); // Append the list item to the mobile menu
    });
});

// Function to hide mobile menu and submenu when screen is enlarged
function hideMobileMenu() {
    var menu = document.getElementById('menu');
    var menuToggle = document.querySelector('.menu-toggle');

    if (window.innerWidth > 767) { // Check if screen width is larger than 767px (the breakpoint for mobile view)
        menu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
}

// Call hideMobileMenu function when the window is resized
window.addEventListener('resize', hideMobileMenu);
