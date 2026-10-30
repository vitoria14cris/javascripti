
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sua escola começou a utilizar ferramentas de Inteligência Artificial para ajudar os alunos nas atividades. O que você pensa sobre essa novidade?",
        alternativas: [
            {
                texto: "Acho uma ótima ideia! A IA pode facilitar os estudos e ajudar na aprendizagem.",
                afirmacao: "Acredita que a IA pode transformar a educação e facilitar o aprendizado dos estudantes."
            },
            {
                texto: "Tenho receio! Os alunos podem ficar dependentes da tecnologia.",
                afirmacao: "Prefere ter cuidado com o uso da IA e acredita que os alunos precisam desenvolver suas próprias habilidades."
            }
        ]
    },
    {
        enunciado: "Você precisa fazer uma pesquisa para um trabalho escolar e decide utilizar uma ferramenta de IA. Como você a utiliza?",
        alternativas: [
            {
                texto: "Peço para a IA explicar o conteúdo e me ajudar a compreender o assunto.",
                afirmacao: "Aprendeu a utilizar a IA como uma ferramenta de apoio para compreender conteúdos difíceis."
            },
            {
                texto: "Peço para a IA fazer todo o trabalho e entrego o resultado.",
                afirmacao: "Percebeu que utilizar a IA para fazer todas as tarefas pode prejudicar seu próprio aprendizado."
            }
        ]
    },
    {
        enunciado: "Seu professor decidiu utilizar Inteligência Artificial durante as aulas para explicar conteúdos difíceis. Qual é sua opinião?",
        alternativas: [
            {
                texto: "Acho interessante! As aulas podem ficar mais dinâmicas e interativas.",
                afirmacao: "Passou a incentivar o uso de tecnologias inovadoras para tornar as aulas mais interessantes."
            },
            {
                texto: "Prefiro que o professor explique sem depender tanto da tecnologia.",
                afirmacao: "Valoriza a relação entre professores e alunos e acredita que a tecnologia deve ser apenas um complemento."
            }
        ]
    },
    {
        enunciado: "Um colega utiliza Inteligência Artificial para criar uma imagem para um trabalho escolar. O que você faria?",
        alternativas: [
            {
                texto: "Também utilizaria a IA para criar imagens e deixar meu trabalho mais criativo.",
                afirmacao: "Descobriu novas possibilidades criativas com a IA e passou a explorar ferramentas digitais."
            },
            {
                texto: "Prefiro criar minha própria imagem, utilizando minhas habilidades artísticas.",
                afirmacao: "Valoriza a criatividade pessoal e acredita que desenvolver habilidades próprias continua sendo importante."
            }
        ]
    },
    {
        enunciado: "Durante uma atividade, você percebe que a Inteligência Artificial apresentou uma informação errada. Qual seria sua atitude?",
        alternativas: [
            {
                texto: "Pesquisaria em outras fontes e verificaria se a informação está correta.",
                afirmacao: "Aprendeu que a IA também comete erros e passou a verificar as informações antes de utilizá-las."
            },
            {
                texto: "Confiaria na resposta da IA, pois ela possui muitas informações.",
                afirmacao: "Percebeu que confiar em todas as respostas da IA pode trazer problemas e precisa desenvolver seu pensamento crítico."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacoes + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";
}

mostraPergunta();
