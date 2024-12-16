function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

document.addEventListener('click', (e) => {
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const navLinks = document.getElementById('nav-links');

    if (!menuHamburguesa.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
    }
});
 

// Enlace con emailjs

(function () {
    emailjs.init("zbgwQc95PFCFL9D6Y");
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_j7wbf3i', 'template_bjg3pgj', this)
        .then(function () {
            alert('Correo enviado con éxito!');
        }, function (error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});


