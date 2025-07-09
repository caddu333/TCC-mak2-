function toggleTheme() {
    const body = document.body;
    const themeIconMoon = document.getElementById('theme-icon-sun');
    const themeIconSun = document.getElementById('theme-icon-moon');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('siteTheme', 'dark');
        themeIconMoon.style.display = 'none';
        themeIconSun.style.display = 'block';
    } else {
        localStorage.setItem('siteTheme', 'light');
        themeIconMoon.style.display = 'block';
        themeIconSun.style.display = 'none';
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('siteTheme');
    const body = document.body;
    const themeIconMoon = document.getElementById('theme-icon-sun');
    const themeIconSun = document.getElementById('theme-icon-moon');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIconMoon.style.display = 'none';
        themeIconSun.style.display = 'block';
    } else {
        body.classList.remove('dark-mode');
        themeIconMoon.style.display = 'block';
        themeIconSun.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();

    const toggleButton = document.getElementById('toggle-dark');
    toggleButton.addEventListener('click', toggleTheme);
});

function toggleTheme() {
    const body = document.body;
    const themeIconMoon = document.getElementById('theme-icon-sun');
    const themeIconSun = document.getElementById('theme-icon-moon');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('siteTheme', 'dark');
        themeIconMoon.style.display = 'block';
        themeIconSun.style.display = 'none';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('siteTheme', 'light');
        themeIconMoon.style.display = 'none';
        themeIconSun.style.display = 'block';
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('siteTheme');
    const body = document.body;
    const themeIconMoon = document.getElementById('theme-icon-sun');
    const themeIconSun = document.getElementById('theme-icon-moon');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIconMoon.style.display = 'none';
        themeIconSun.style.display = 'block';
    } else {
        body.classList.add('dark-mode');
        themeIconMoon.style.display = 'block';
        themeIconSun.style.display = 'none';
    }
}

// Aplica o tema assim que a página carregar
document.addEventListener('DOMContentLoaded', applySavedTheme);

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
    
    const toggleButton = document.getElementById('toggle-dark');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleTheme);
    }
    
    // Menu mobile
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        const isExpanded = navMenu.classList.contains('show');
        navToggle.setAttribute('aria-expanded', isExpanded);
      });
    }
  });

  