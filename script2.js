document.querySelectorAll('.team-member').forEach(member => {
            member.addEventListener('click', () => {
                alert(`¡Hola! Soy ${member.querySelector('h3').textContent}. Encantado de conocerte.`);
            });
        });