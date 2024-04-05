const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight - navbarHeight) {
            const id = section.getAttribute('id');
            const activeLink = document.querySelector(`.navbar-link[href="#${id}"]`);
            activeLink.classList.add('active');
        } else {
            const activeLinks = document.querySelectorAll('.navbar-link.active');
            activeLinks.forEach((link) => {
                link.classList.remove('active');
            });
        }
    });
});