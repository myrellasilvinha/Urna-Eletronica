# Sistema de Urna Eletrônica

Projeto desenvolvido como trabalho prático da disciplina de **JavaScript**, com o objetivo de aplicar conceitos de manipulação de dados, armazenamento local, consumo de APIs e desenvolvimento de aplicações web utilizando JavaScript puro.

## 📋 Sobre o Projeto

O Sistema de Urna Eletrônica simula o funcionamento de uma eleição, permitindo o cadastro de candidatos, consulta automática de endereço através do CEP, realização de votos e apuração dos resultados.

Todos os dados são armazenados localmente utilizando o **localStorage**, garantindo que as informações permaneçam salvas mesmo após o fechamento do navegador.

## 🎯 Objetivos de Aprendizagem

* Manipulação de objetos em JavaScript;
* Utilização de arrays (vetores/listas);
* Persistência de dados com **localStorage**;
* Consumo de APIs utilizando **fetch()**;
* Manipulação do DOM;
* Tratamento de eventos;
* Validação de formulários;
* Desenvolvimento de interfaces utilizando HTML, CSS e JavaScript puro.

## ⚙️ Funcionalidades

### Cadastro de Candidatos

* Cadastro de novos candidatos;
* Validação para impedir números de candidatos duplicados;
* Consulta automática de endereço através do CEP utilizando a API ViaCEP;
* Armazenamento dos candidatos no navegador.

### Sistema de Votação

* Registro de votos informando apenas o número do candidato;
* Validação para impedir votos em candidatos inexistentes;
* Atualização automática da quantidade de votos.

### Apuração dos Resultados

* Exibição da lista de candidatos cadastrados;
* Quantidade de votos recebidos por cada candidato;
* Atualização em tempo real após cada votação.

### Informações do Sistema

* Total de candidatos cadastrados;
* Consulta automática de endereço via CEP;
* Interface moderna inspirada na urna eletrônica.

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* LocalStorage
* Fetch API
* ViaCEP API
* Bootstrap Icons

## 📂 Estrutura do Projeto

```text
Sistema-de-Urna-Eletronica/
│
├── index.html
├── css/
    └── style.css
└── js/
    └── script.js
```

> **Obs.:** A pasta `img` é opcional e pode conter as imagens utilizadas na interface.

## 🌐 API Utilizada

O projeto utiliza a API pública do **ViaCEP** para consultar automaticamente o endereço do candidato a partir do CEP informado.

Informações obtidas:

* Rua;
* Bairro;
* Cidade;
* Estado.

## 💾 Armazenamento de Dados

A aplicação utiliza o **localStorage** do navegador para armazenar:

* Candidatos cadastrados;
* Quantidade de votos de cada candidato.

Isso permite que os dados permaneçam salvos entre diferentes sessões do navegador.

## ▶️ Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/myrellasilvinha/Sistema-de-Urna-Eletronica.git
```

2. Abra o arquivo `index.html` em qualquer navegador moderno.

3. Cadastre os candidatos.

4. Realize a votação informando o número do candidato.

5. Acompanhe a apuração dos votos em tempo real.

## 📸 Funcionalidades Demonstradas

* Cadastro de candidatos;
* Consulta automática de endereço via CEP;
* Sistema de votação;
* Apuração dos votos;
* Persistência de dados com localStorage;
* Interface responsiva e moderna.

## 📚 Conceitos Aplicados

* Objetos
* Arrays
* LocalStorage
* Fetch API
* Manipulação do DOM
* Eventos
* Validação de dados
* Consumo de APIs REST

## 👩‍💻 Autora

**Myrella Silvinha**

Projeto desenvolvido para fins acadêmicos como atividade avaliativa da disciplina de **CONSTRUÇÃO DE PÁGINAS WEB II**.
