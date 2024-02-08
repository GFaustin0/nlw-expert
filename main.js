const questoesHTML = [
    {
        pergunta: "O que HTML representa?",
        respostas: [
            "Hypertext Markup Language",
            "High-Level Text Language",
            "Hyperlink and Text Management Language",
        ],
        correta: 0
    },
    {
        pergunta: "Qual tag é usada para criar links em HTML?",
        respostas: [
            "<link>",
            "<a>",
            "<url>",
        ],
        correta: 1
    },
    {
        pergunta: "Qual elemento é utilizado para criar uma quebra de linha?",
        respostas: [
            "<break>",
            "<br>",
            "<line>",
        ],
        correta: 1
    },
    {
        pergunta: "Em HTML, qual tag é usada para criar uma lista ordenada?",
        respostas: [
            "<ul>",
            "<ol>",
            "<li>",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a versão mais recente do HTML?",
        respostas: [
            "HTML4",
            "HTML5",
            "XHTML",
        ],
        correta: 1
    },
    {
        pergunta: "O que significa a sigla HTML?",
        respostas: [
            "Hyperlink and Text Markup Language",
            "Hypertext and Links Markup Language",
            "Hypertext Markup Language",
        ],
        correta: 2
    },
    {
        pergunta: "Qual atributo é usado para fornecer um texto alternativo para uma imagem?",
        respostas: [
            "alt",
            "src",
            "title",
        ],
        correta: 0
    },
    {
        pergunta: "Qual tag é usada para criar um hyperlink em HTML?",
        respostas: [
            "<link>",
            "<a>",
            "<hlink>",
        ],
        correta: 1
    },
    {
        pergunta: "Em HTML, qual tag é usada para definir o cabeçalho de um documento?",
        respostas: [
            "<head>",
            "<header>",
            "<h1>",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função da tag <meta charset='UTF-8'> em um documento HTML?",
        respostas: [
            "Define o idioma do texto",
            "Define o charset para Unicode",
            "Define o estilo da página",
        ],
        correta: 1
    },
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = questoesHTML.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of questoesHTML) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let respostas of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = respostas
        dt.querySelector('input').setAttribute('name', 'pergunta-' + questoesHTML.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(respostas)


        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    // colocar a pergunta na tela
    quiz.appendChild(quizItem)
}