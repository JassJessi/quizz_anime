
const botaoMostrarAnimes = document.querySelector('.btn-mostrar-animes');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

console.log(botaoMostrarAnimes);
console.log(projetosInativos);

botaoMostrarAnimes.addEventListener('click', () => {
    //Adicionando a classe "ativo" nos projetos escondidos
    mostrarMaisAnimes();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarAnimes.classList.add("remover");
}

function mostrarMaisAnimes() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}
