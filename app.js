// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesAmigos = [];

//adiciona o nome do amigo digitado na lista
function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;

    if(nome == ''){
        alert('Favor informar um nome')
    } else {
        if (nomesAmigos.includes(nome)){
            alert(`O nome ${nome} já foi informado`);
        } else {
            nomesAmigos.push(nome);
        }        
    }

    limparCampo('amigo');
    listaNomes();
    console.log(nomesAmigos);
}

//apresenta a lista dos nomes digitados na tela
function listaNomes(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    let htmlNomes = '';

    for (let i = 0; i < nomesAmigos.length; i++) {
        htmlNomes += `<li>${nomesAmigos[i]}</li>`;
    }

    lista.innerHTML = htmlNomes;
}

//executa quando clica em Sortear Amigo. Seleciona um dos nomes da lista
function sortearAmigo(){
    let nomeSorteado = '';
    
    let qtdeAmigos = nomesAmigos.length;

    let posicaoNome = parseInt(Math.random() * qtdeAmigos);

    if (qtdeAmigos = 0){
        alert('Não foi informado nenhum nome para sortear');
    }

    nomeSorteado = nomesAmigos[posicaoNome];

    console.log(nomeSorteado);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O nome sorteado foi ${nomeSorteado.toUpperCase()}`;
}

//função auxiliar para limpar o conteúdo do campo html quando necessário
function limparCampo(nomeCampo){
    nome = document.getElementById(nomeCampo);
    nome.value = '';
}
