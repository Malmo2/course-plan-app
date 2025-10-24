// =============================================
// MOBILE MENU TOGGLE
// =============================================
const menuToggle = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');

if (menuToggle && navbarLinks) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = navbarLinks.classList.contains('active');
    navbarLinks.classList.toggle('active');

    // Update aria-expanded
    menuToggle.setAttribute('aria-expanded', !isExpanded);

    // Add animation to hamburger
    const hamburger = menuToggle.querySelector('.hamburger');
    if (hamburger) {
      hamburger.style.transform = navbarLinks.classList.contains('active')
        ? 'rotate(45deg)'
        : 'rotate(0)';
    }
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      const hamburger = menuToggle.querySelector('.hamburger');
      if (hamburger) {
        hamburger.style.transform = 'rotate(0)';
      }
    });
  });
}

// =============================================
// KNOWLEDGE SECTION - TOC AND CARDS
// =============================================
const tocButtons = document.querySelectorAll('.toc-item');
const knowledgeItems = document.querySelectorAll('.knowledge-list li');

// When clicking on a knowledge card header
knowledgeItems.forEach(item => {
  const header = item.querySelector('.li-header');

  if (header) {
    header.addEventListener('click', () => {
      const isExpanded = item.classList.contains('active');

      // Close all cards and TOC
      knowledgeItems.forEach(other => {
        other.classList.remove('active');
        const otherHeader = other.querySelector('.li-header');
        if (otherHeader) {
          otherHeader.setAttribute('aria-expanded', 'false');
        }
      });
      tocButtons.forEach(toc => {
        toc.classList.remove('active');
        toc.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isExpanded) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');

        // Match corresponding TOC
        const id = item.dataset.id;
        const toc = document.querySelector(`.toc-item[data-id="${id}"]`);
        if (toc) {
          toc.classList.add('active');
          toc.setAttribute('aria-expanded', 'true');
        }

        // Smooth scroll to view
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }
    });
  }
});

// When clicking on a left-side TOC button
tocButtons.forEach(toc => {
  const id = toc.dataset.id;
  const match = document.querySelector(`.knowledge-list li[data-id="${id}"]`);

  toc.addEventListener('click', () => {
    if (!match) return;
    const isExpanded = match.classList.contains('active');

    // Close all others
    knowledgeItems.forEach(li => {
      li.classList.remove('active');
      const header = li.querySelector('.li-header');
      if (header) {
        header.setAttribute('aria-expanded', 'false');
      }
    });
    tocButtons.forEach(button => {
      button.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
    });

    // Toggle this one
    if (!isExpanded) {
      match.classList.add('active');
      toc.classList.add('active');
      toc.setAttribute('aria-expanded', 'true');

      const header = match.querySelector('.li-header');
      if (header) {
        header.setAttribute('aria-expanded', 'true');
      }

      match.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});
