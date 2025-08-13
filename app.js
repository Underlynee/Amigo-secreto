// CRIAR UMA ARRAY PARA ARMAZENAR OS DADOS DO USUÁRIO
// FAZER COM O QUE O USUÁIO DIGITE O NOME DO AMIGO
// Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector
// ACIONAR O BOTÃO DE APERTAR, PARA ENVIR O DADO DO NOME DO AMIGO PARA O ARRAY
// LIMPAR O CAMPO DE TEXTO APÓS O ENVIO
// CONFIGURAR O BOTÃO PARA FAZER O SORTEIO
// MOSTRAR O NOME DO AMIGO SORTEADO NA TELA



h2();

let listaDeAmigos = [];
let amigoSorteado = 0;



function adicionarAmigo(){
    amigoAdicionado = document.getElementById("amigo").value;
    if (amigoAdicionado != "") {
        if (listaDeAmigos.includes(amigoAdicionado)) {
        alert("Esse amigo já está na lista.");
        document.getElementById("amigo").value = "";
        return;
        }
        listaDeAmigos.push(amigoAdicionado);
        console.log(listaDeAmigos +","+ listaDeAmigos.length )
        amigosNaLista()
        amigoAdicionado = document.getElementById("amigo").value = "";
        document.getElementById("resultado").innerHTML = "";
    } else {
        alert("Por favor, digite um nome antes de adicionar.");
    }
}


function h2() {
    let titulo = document.querySelector("h2").innerHTML = "Digite o nome dos seus amigos um por vez"   ;
    
}


function amigosNaLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = listaDeAmigos.join("<br>");
    
}


function sortearAmigo() {
    document.querySelector("buttom");
    if (listaDeAmigos.length > 0){
        amigoSorteado = parseInt(Math.random() * listaDeAmigos.length);
        console.log(amigoSorteado);
        document.getElementById("resultado").innerHTML = ("O sorteado(a) foi " + listaDeAmigos[amigoSorteado] + "!");
        listaDeAmigos = []
        console.log(listaDeAmigos)
        document.getElementById("listaAmigos").innerHTML = "";

           } else {
        alert("Por gentileza, adicione os nomes dos amigos antes de sortear.");

       }
    
}