const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('#navbar .links');

function toggleMenu() {
    const isOpen = hamburger.classList.toggle('active');
    links.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
}

hamburger.addEventListener('click', toggleMenu);

hamburger.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleMenu();
    }
});

links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        links.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
    });
});

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.querySelector('#name').value.trim();
        document.querySelector('#form-status').textContent =
            'Thank you, ' + name + '! Your message has been received.';
        contactForm.reset();
    });
}
