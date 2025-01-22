# challenge-amigo-secreto-pt-br

# Alura - One Challenge: Amigo Secreto

Este é um projeto no qual foi desenvolvido uma aplicação que permite aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto". O usuário deverá adicionar nomes por meio de um campo de texto e de um botão "Adicionar". Os nomes inseridos serão exibidos em uma lista visível na página, e ao finalizar, um botão "Sortear Amigo" selecionará um dos nomes de forma aleatória, exibindo o resultado na tela.

## Funcionalidades
- **Adicionar nomes**: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".

- **Validar entrada**: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.

- **Visualizar a lista**: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.

- **Sorteio aleatório**: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.

## Instalação

Este é um projeto construído em HTML, CSS e JavaScript. Não é necessário instalar nenhum servidor ou dependência adicional. Para rodar a aplicação, basta clonar o repositório em sua máquina e abrir o arquivo HTML no seu navegador.

## Como Usar

1. **Adicionar Amigos**:
   - Digite o nome de um amigo no campo de entrada e clique em "Adicionar Amigo" ou aperte a tecla "Enter".
   - O nome será adicionado à lista de amigos.

2. **Sortear Amigo**:
   - Clique em "Sortear Amigo" para sortear um nome aleatório da lista de amigos.
   - O nome sorteado será exibido na seção de resultados.


## Tecnologias Utilizadas

   - 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
           
   - 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
          
   - 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          

## Como Funciona

- **Adicionar amigo**: O usuário digita o nome de um amigo no campo de input. Se o nome tiver menos de 2 caracteres ou estiver vazio, uma mensagem de erro será exibida. O botão "Adicionar Amigo" é habilitado somente quando um nome válido é inserido.
- **Sorteio**: O sorteio é feito através de um número aleatório gerado pelo `Math.random()`. O nome sorteado é mostrado na tela e removido da lista de amigos.
