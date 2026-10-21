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
