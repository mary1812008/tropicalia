document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById ('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click' , function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList. toggle('apresenta-lista')

    })
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    const alternaContraste = document.getElementById('alterna-contraste')
    
    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFone += 0.1;
        document.body.style.fontSize = `$ {tamanhoatualFonte} rem`
    })
    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle("alto-contraste")
    })
})