const linksMenu = document.querySelectorAll('nav ul li a');

linksMenu.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const secaoAlvo = link.getAttribute('href');
        window.location.href = secaoAlvo;
    });
});
