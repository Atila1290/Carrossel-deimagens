const slides = document.querySelectorAll(".slide");
const moverDireita = document.querySelector(".direita");
const moverEsquerda = document.querySelector(".esquerda");

let slideAtual = 0; 

moverDireita.addEventListener("click", function(){
    if(slideAtual === slides.length - 1){
        return
    }

    esconderSlide();

    slideAtual++;

    slides[slideAtual].classList.add("selecionado");

    mostrarOuEscondersetas();
})

moverEsquerda.addEventListener("click", function(){
    if(slideAtual === 0){
        return;
    }

    esconderSlide();

    slideAtual--;

    slides[slideAtual].classList.add("selecionado");


    mostrarOuEscondersetas();
})

function esconderSlide(){
    const slideAberto = document.querySelector(".selecionado");
    slideAberto.classList.remove("selecionado");
}

function mostrarOuEscondersetas(){
    const naoEhOPrimeiroSlide = slideAtual !== 0;
    if(naoEhOPrimeiroSlide){
        moverEsquerda.classList.remove("opacidade");
    }else {
        moverEsquerda.classList.add("opacidade");
    }

    const chegouNoUltimoSlide = slideAtual !== 0 && slideAtual === slides.length - 1;
    if(chegouNoUltimoSlide){
        moverDireita.classList.add("opacidade");
    }else {
        moverDireita.classList.remove("opacidade");
    }
}
