//MOBILE MENU

const menuBotton = document.getElementById('menu-button');
const navlinks = document.querySelector('.nav-links');


    menuBotton.addEventListener('click', () => {
        navlinks.classList.toggle('open');

        const isOpen = navlinks.classList.contains('open');
        menuBotton.innerHTML = isOpen ? '✖' : '☰';
        menuBotton.setAttribute('aria-expanded', isOpen);
    });

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navlinks.classList.contains('open')) {
            navlinks.classList.remove('open');
            menuBotton.innerHTML = '☰';
        }
    });
});


//FORM VALIDATION

const contactForm = document.querySelector('form');
const messageDiv = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {

        event.preventDefault();

        const name = contactForm.querySelector("input[name='name']").value.trim();
        const email = contactForm.querySelector("input[name='email']").value.trim();
        const msg = contactForm.querySelector("textarea[name='message']").value.trim();

        if (name === "" || email === "" || msg === "") {
            messageDiv.textContent = '❗ Please fill all fields.';
            messageDiv.style.color = 'red';
            return;
        }

        messageDiv.textContent = '✔ Message sent successfully!';
        messageDiv.style.color = 'lime';
        contactForm.reset();
    });
}


//SCROLL PROGRESS BAR

const scrollbar = document.createElement('div');
scrollbar.id = 'scroll-progress';
document.body.prepend(scrollbar);

scrollbar.style.position = 'fixed';
scrollbar.style.top = '0';
scrollbar.style.left = '0';
scrollbar.style.height = '5px';
scrollbar.style.background = '#00eaff';
scrollbar.style.width = '0%';
scrollbar.style.zIndex = '2000';

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / pageHeight) * 100;

    scrollbar.style.width = scrollPercent + '%';
});
