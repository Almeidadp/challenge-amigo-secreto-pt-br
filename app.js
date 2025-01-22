let amigos = [];
let nomeInput = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');


function exibirTextoNaTela (tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

// Evento para adicionar amigo com a tecla enter
nomeInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
      adicionarAmigo();
      nomeInput.value = '';
      exibirTextoNaTela('h2',"Digite o nome dos seus amigos: ");
  }
}
);

// Adiciona um amigo a lista
function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value;
  if (nomeAmigo === '') {
    alert("Por favor, insira um nome!")
    return;
  }
    amigos.push(nomeAmigo);
    atualizaLista();
    document.getElementById('amigo').value = '';
}

//Atualiza a lista de amigos
function atualizaLista() {
  let list = document.getElementById("listaAmigos");
  list.innerHTML = "";

  for(let i = 0; i < amigos.length; i += 1) {
    let item = document.createElement('li');
    item.textContent = amigos[i];
    list.appendChild(item);
  }
}

//Verifica se um nome já foi inserido previamente
function contemNome(listaAmigos, nome) {
  return listaAmigos.includes(nome);
}


//Sortea Amigos aleatoriamente
function sortearAmigo() {
  if(amigos.length === 0) {
    alert("Por favor, adicione um amigo!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}

