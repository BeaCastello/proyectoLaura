//Botón leer más para la sección:¿Qué es un inmigrante?

function toggleContent() {
    const contentContainer = document.getElementById('content-container');
    const button = document.querySelector('.toggle-btn');

    if (contentContainer.style.display === 'flex') {
        contentContainer.style.display = 'none';
        button.textContent = 'Mostrar más';
    } else {
        contentContainer.style.display = 'flex';
        button.textContent = 'Mostrar menos';
    }
}

//¿Qué es un arraigo?

function changeContent(title, imageSrc, title1, description) {
    const titleElement = document.getElementById('title');
    const imageElement = document.getElementById('left-image');
    const titleElementDuplic = document.getElementById('title1');
    const descriptionElement = document.getElementById('description');


    // Actualiza el titulo
    titleElement.innerHTML = title;

    // Actualiza la imagen
    imageElement.src = imageSrc;
    imageElement.alt = title1;


    // Actualiza el título y la descripción
    titleElementDuplic.innerHTML = title1;
    descriptionElement.innerHTML = description;

    // Inserta el título nuevamente después de la imagen
    const duplicateTitle = document.createElement('h2');
    duplicateTitle.innerHTML = title1;
    duplicateTitle.className = 'roots-title';

    // Inserta el nuevo título antes de la descripción y después de la imagen
    if (textContainer.querySelector('.title1')) {
        textContainer.querySelector('.title1').remove();
    }
    duplicateTitle.classList.add('title1');
    textContainer.insertBefore(title1, descriptionElement);
}
