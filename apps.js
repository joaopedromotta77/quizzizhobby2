import { missoes } from "./missoes.js";


const telaInicial = document.querySelector("#tela-inicial");
const telaDesafio = document.querySelector("#tela-desafio");

const btnIniciar = document.querySelector("#btn-iniciar");
const btnDesafio = document.querySelector("#btn-desafio");
const btnNovamente = document.querySelector("#btn-novamente");
const btnVoltar = document.querySelector("#btn-voltar");

const textoDesafio = document.querySelector("#texto-desafio");


let ultimoDesafio = "";


// Função responsável por escolher uma missão aleatória
function gerarDesafio() {

    let numeroAleatorio;

    let desafio;

    // Evita repetir o mesmo desafio duas vezes seguidas
    do {

        numeroAleatorio = Math.floor(
            Math.random() * missoes.length
        );

        desafio = missoes[numeroAleatorio];

    } while (
        desafio === ultimoDesafio && missoes.length > 1
    );


    ultimoDesafio = desafio;


    // Utilizando o método replace()
    desafio = desafio.replace(
        "seu jogador favorito",
        "seu jogador favorito"
    );


    textoDesafio.textContent = desafio;
}


// Função para iniciar o jogo
function iniciarJogo() {

    telaInicial.classList.add("escondido");

    telaDesafio.classList.remove("escondido");

    gerarDesafio();
}


// Função para voltar para a tela inicial
function voltarInicio() {

    telaDesafio.classList.add("escondido");

    telaInicial.classList.remove("escondido");

    textoDesafio.textContent =
        "Clique no botão abaixo para receber seu desafio.";

    ultimoDesafio = "";
}


// Botão Começar
btnIniciar.addEventListener(
    "click",
    iniciarJogo
);


// Botão Gerar desafio
btnDesafio.addEventListener(
    "click",
    gerarDesafio
);


// Botão Jogar novamente
btnNovamente.addEventListener(
    "click",
    gerarDesafio
);


// Botão Voltar
btnVoltar.addEventListener(
    "click",
    voltarInicio
);


// Utilizando o for of
function mostrarMissoesNoConsole() {

    for (const missao of missoes) {

        console.log(missao);

    }

}

mostrarMissoesNoConsole();