const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "variable myVar = 10;",
        "let myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorna esse elemento?",
      respostas: [
        "pop()",
        "last()",
        "remove()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar todos os elementos com a classe especificada",
        "Selecionar o primeiro elemento com a classe especificada",
        "Selecionar o último elemento com a classe especificada",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes não é um tipo de dado em JavaScript?",
      respostas: [
        "Number",
        "String",
        "Character",
      ],
      correta: 2
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
      respostas: [
        "//",
        "/*",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para adicionar novos elementos ao final de um array e retorna o novo comprimento do array?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "32",
        "5",
        "Erro",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para iterar sobre os elementos de um array?",
      respostas: [
        "forEach()",
        "forEvery()",
        "iterate()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída da expressão Boolean(3 < 7)?",
      respostas: [
        "true",
        "false",
        "Erro",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Remover um evento de um elemento",
        "Adicionar um evento a um elemento",
        "Substituir um evento de um elemento",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    } 
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }