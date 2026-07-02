let candidatos = JSON.parse(localStorage.getItem("candidatos")) || [];

mostrarResultado();
mostrarTotalCandidatos();

async function consultar() {

    let cep = document.getElementById("cep").value;

    if (cep.length != 8) {
        alert("CEP inválido!");
        return;
    }

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const endereco = await resposta.json();

    if (endereco.erro) {
        alert("CEP não encontrado!");
        return;
    }

    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;

}

function cadastrarCandidato() {

    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("numero").value;
    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;


    if (nome == "" || numero == "" || cep == "") {
        alert("Preencha todos os campos.");
        return;
    }

    let existe = candidatos.find(c => c.numero == numero);

    if (existe) {
        alert("Esse número já está cadastrado.");
        return;
    }

    let candidato = {

        nome: nome,
        numero: numero,
        cep: cep,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        votos: 0

    };

    candidatos.push(candidato);

    localStorage.setItem(
        "candidatos",
        JSON.stringify(candidatos)
    );

    alert("Candidato cadastrado com sucesso!");

    limparCampos();

    mostrarResultado();

}

function mostrarTotalCandidatos() {

    document.getElementById("totalCandidatos").innerText = candidatos.length;

}

function limparCampos() {

    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";

}

function votar() {

    let numero = document.getElementById("numeroVoto").value;

    if (numero == "") {

        alert("Informe o número do candidato.");
        return;

    }

    let candidato = candidatos.find(c => c.numero == numero);

    if (!candidato) {

        alert("Candidato não encontrado.");
        return;

    }

    candidato.votos++;

    localStorage.setItem(
        "candidatos",
        JSON.stringify(candidatos)
    );

    alert("Voto computado com sucesso!");

    document.getElementById("numeroVoto").value = "";

    mostrarResultado();

}

function mostrarResultado() {

    let tabela = document.getElementById("resultado");

    tabela.innerHTML = "";

    for (let candidato of candidatos) {

        tabela.innerHTML += `
            <tr>
                <td>${candidato.nome}</td>
                <td>${candidato.numero}</td>
                <td class="quantidade">${candidato.votos}</td>
            </tr>
        `;

    }

}