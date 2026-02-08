document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrollingEvents()

  window.addEventListener("scroll", updateActiveSection, { passive: true });
  window.addEventListener("resize", updateActiveSection);

  // Run once on load, wait a second for the dom to load correctly
  setTimeout(() => updateActiveSection(), 100);
});

// Override instant scrolling behaviour
function initSmoothScrollingEvents() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

function updateActiveSection() {
  // Location in pixels at which the extended index item is determined
  const viewportPosition = window.innerHeight / 3;

  let closestSection = null;
  document.querySelectorAll("section[id]")
    .forEach(section => {
      const rect = section.getBoundingClientRect();
      if (viewportPosition > rect.top) {
        closestSection = section;
      }
    }
  );

  if (closestSection) {
    setActiveLink(closestSection.id);
  }
}

function setActiveLink(id) {
  document.querySelectorAll('nav > ol > li > a')
    .forEach(link => {
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('a-hover');
      } else {
        link.classList.remove('a-hover');
      }
  });
}

