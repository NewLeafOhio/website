

  // Function to highlight the selected item
  function highlightItem(id) {
    // Remove highlight from all sections
    const sections = document.querySelectorAll('full_width_section');
    sections.forEach(section => {
      section.classList.remove('highlighted');
    });

    // Highlight the selected section
    const selectedSection = document.getElementById(id);
    selectedSection.classList.add('highlighted');
  }

  // Smooth scrolling when clicking on anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').slice(1); // Remove '#' from href
      document.getElementById(targetId).scrollIntoView({
        Behavior : 'smooth'
      });

      highlightItem(targetId);
    });
  });
