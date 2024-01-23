const slides = document.querySelectorAll(".slide");
const moverDireita = document.querySelectorAll(".direita");
const moverEsquerda = document.querySelectorAll(".esquerda");

let slideAtual = 0; 

function nextslide() {
    slides.forEach(indice => indice.classList.remove('selecionado'));
    slides[slideAtual].classList.add('selecionado');
}

moverDireita.forEach(botao => {
    botao.addEventListener('click', () => {
        slideAtual = (slideAtual + 1) % slides.length;
        nextslide();
    });
});

moverEsquerda.forEach(botao => {
    botao.addEventListener('click', () => {
        slideAtual= (slideAtual - 1 + slides.length) % slides.length;
        nextslide();
    });
});

nextslide();
