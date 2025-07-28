const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um jovem marinheiro em busca dos tesouros perdidos",
        alternativas: [
            {
                texto: "Você gosta de aventuras e vai em direção aos redemoinhos azuis..",
                afirmacao: " Grandes tsouros te esperam depois dos redemoinhos "
            },
            {
                texto: "Vcê é um cara tranquilo e prefere a praia de esmeralda",
                afirmacao: " Aquela praaia parecia tão tranquila com aquela areia esmeralda, maass você seguinte"
            }
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "alternativa 03",
                afirmacao: "resultado 03"
            },
            {
                texto: "alternativa 04",
                afirmacao: "resultado 04"
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "alternativa 05",
                afirmacao: "resultado 05"
            },
            {
                texto: "alternativa 06",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent= ""
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas ){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " "
    atual++
    mostraPergunta();
}

function mostreResultado(){
    caixaPerguntas.textContent = " Tudo começou... ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

console.log(perguntas)