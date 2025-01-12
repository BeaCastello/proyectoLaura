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
    emailjs.init("H75WbyQSMoVVgsGfI");
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm("service_ghupzau","template_0aug3ln", this)
        .then(function () {
            alert('Correo enviado con éxito!');
        }, function (error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});