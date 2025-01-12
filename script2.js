
(function () {
    emailjs.init("H75WbyQSMoVVgsGfI");
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm("service_cov3d0q","template_hb4zrx5", this)
        .then(function () {
            alert('Correo enviado con éxito!');
        }, function (error) {
            alert('Error al enviar el correo: ' + JSON.stringify(error));
        });
});
