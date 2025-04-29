
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('navbar-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (toggleBtn && navList) {
    toggleBtn.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  }

  // Close menu on click (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('show')) {
        navList.classList.remove('show');
      }
    });
  });

  // Highlight active link
  const path = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => {
    observer.observe(el);
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('mode-toggle');
  const body = document.body;

  // Load saved mode
  const savedMode = localStorage.getItem('mode');
  if (savedMode) {
    body.classList.add(savedMode);
  }

  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark-mode');
      } else if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('modern-mode');
        localStorage.setItem('mode', 'modern-mode');
      } else {
        body.classList.remove('modern-mode');
        body.classList.add('light-mode');
        localStorage.setItem('mode', 'light-mode');
      }
    });
  }
});
