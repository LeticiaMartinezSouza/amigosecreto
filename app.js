let amigos = ();
let listaDeAmigos = ();
let sorteio = sortearAmigo(listaDeAmigos);
let sorteados = ();
console.log(sorteio);

function adicionarAmigo() {
    input = document.getElementById('amigo');
    let nome = input.value;
    amigos.push(nome);
    input.value = '';
    console.log(amigos);
    listaDeAmigos.push(nome);
    console.log(listaDeAmigos);
    let lista = document.getElementById('lista');
    lista.innerHTML += `<li>${nome}</li>`;
    console.log(lista);
}

function sortearAmigo() {
    input = document.getElementById('amigos');
    let nome = input.value;
}

//Desculpe mas não consegui desenvolver o challenge. Ainda estou aprendendo e não consegui entender como fazer o sorteio.
//Não consegui ativar o botão adicionar,
//Não consegui fazer o sorteio.