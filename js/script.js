// Recupera os candidatos salvos no localStorage.
// Se não existir nenhum, cria um array vazio.
let candidatos = JSON.parse(localStorage.getItem("candidatos")) || [];

// Mostra os resultados da votação quando a página é aberta.
mostrarResultado();

// Mostra a quantidade de candidatos cadastrados.
mostrarTotalCandidatos();


// CONSULTAR CEP (ViaCEP)
async function consultar() {

    // Pega o CEP digitado pelo usuário.
    let cep = document.getElementById("cep").value;

    // Verifica se o CEP possui exatamente 8 números.
    if (cep.length != 8) {
        alert("CEP inválido!");
        return; // Encerra a função.
    }

    // Faz uma requisição para a API ViaCEP.
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    // Converte a resposta para JSON.
    const endereco = await resposta.json();

    // Caso o CEP não exista.
    if (endereco.erro) {
        alert("CEP não encontrado!");
        return;
    }

    // Preenche automaticamente os campos de endereço.
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;

}


// CADASTRAR CANDIDATO
function cadastrarCandidato() {

    // Obtém os valores digitados pelo usuário.
    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("numero").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    // Verifica se os campos obrigatórios foram preenchidos.
    if (nome == "" || numero == "" || cep == "") {
        alert("Preencha todos os campos.");
        return;
    }

    // Procura se já existe um candidato com o mesmo número.
    let existe = candidatos.find(c => c.numero == numero);

    // Se encontrou, impede o cadastro.
    if (existe) {
        alert("Esse número já está cadastrado.");
        return;
    }

    // Cria um objeto representando o candidato.
    let candidato = {

        nome: nome,
        numero: numero,
        cep: cep,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        estado: estado,

        // Todo candidato inicia com zero votos.
        votos: 0

    };

    // Adiciona o candidato ao array.
    candidatos.push(candidato);

    // Salva novamente o array atualizado no localStorage.
    localStorage.setItem(
        "candidatos",
        JSON.stringify(candidatos)
    );

    alert("Candidato cadastrado com sucesso!");

    // Limpa os campos do formulário.
    limparCampos();

    // Atualiza a tabela de resultados.
    mostrarResultado();

}


// MOSTRAR TOTAL DE CANDIDATOS
function mostrarTotalCandidatos() {

    // Exibe na tela a quantidade de candidatos cadastrados.
    document.getElementById("totalCandidatos").innerText = candidatos.length;

}


// LIMPAR CAMPOS
function limparCampos() {

    // Limpa todos os campos do formulário.
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";

}


// VOTAÇÃO
function votar() {

    // Pega o número digitado pelo eleitor.
    let numero = document.getElementById("numeroVoto").value;

    // Verifica se foi informado algum número.
    if (numero == "") {

        alert("Informe o número do candidato.");
        return;

    }

    // Procura o candidato pelo número informado.
    let candidato = candidatos.find(c => c.numero == numero);

    // Caso não exista.
    if (!candidato) {

        alert("Candidato não encontrado.");
        return;

    }

    // Soma mais um voto ao candidato.
    candidato.votos++;

    // Atualiza os dados no localStorage.
    localStorage.setItem(
        "candidatos",
        JSON.stringify(candidatos)
    );

    alert("Voto computado com sucesso!");

    // Limpa o campo de votação.
    document.getElementById("numeroVoto").value = "";

    // Atualiza a tabela de resultados.
    mostrarResultado();

}

// EXIBIR RESULTADOS
function mostrarResultado() {

    // Seleciona a tabela onde os candidatos serão exibidos.
    let tabela = document.getElementById("resultado");

    // Limpa a tabela antes de preencher novamente.
    tabela.innerHTML = "";

    // Percorre todos os candidatos cadastrados.
    for (let candidato of candidatos) {

        // Adiciona uma nova linha na tabela para cada candidato.
        tabela.innerHTML += `
            <tr>
                <td>${candidato.nome}</td>
                <td>${candidato.numero}</td>
                <td class="quantidade">${candidato.votos}</td>
            </tr>
        `;

    }

}
