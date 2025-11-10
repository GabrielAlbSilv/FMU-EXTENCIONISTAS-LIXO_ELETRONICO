/* ------------------------------
   Script dinâmico e interativo
   (Pronto para expansão futura)
--------------------------------*/

// Animação suave de rolagem entre seções
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de fade-in ao rolar a página
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('section, .card');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// Adiciona classe CSS dinamicamente
// (Os elementos com a classe "visible" podem ganhar efeitos de animação definidos no CSS)
