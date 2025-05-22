// Initialisation des animations AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Gestion de la navbar au scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Back to top
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('active', window.scrollY > 300);
});




// Configuration du slider
const heroSlider = new bootstrap.Carousel('#heroSlider', {
    interval: 2000,
    wrap: true
});

// Mode sombre
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Vérifier le thème stocké ou la préférence système
const currentTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Appliquer le thème au chargement
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
}

// Gestion du clic sur le bouton
themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';

    if (isDark) {
        html.removeAttribute('data-theme');
        themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        localStorage.setItem('theme', 'dark');
    }
});

// Écouter les changements de préférence système
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
        }
    }
});
