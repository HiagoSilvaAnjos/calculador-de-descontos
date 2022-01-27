let produto = document.getElementById('valor'); // Valor input
let desconto = document.getElementById('porcentagem'); // Valor input
let mensagemProduto = document.getElementById('sintaxePreco'); // Mensagem de erro
let mensagemDesconto = document.getElementById('sintaxeDesc'); // Mensagem de erro
let campo = document.getElementById('campoResultado'); // Div que aparece
let resultado = document.getElementById('resultDesc'); // Resultado


let calcular = document.getElementById('calcDesc');
calcular.addEventListener('click', calcularResult);

function calcularResult() {

    let valorProduto = parseFloat(produto.value.replace(',', '.')); // Vai passar para Número quebrado
    let descProduto = parseInt(desconto.value); // Vai passar para Número inteiro

    // Condicionais

    if (valorProduto != Number(valorProduto)) {
        return (mensagemProduto.style.display = 'inline-block',
            campo.style.display = 'none'
        )

    } else if (descProduto != Number(descProduto)) {
        return (mensagemDesconto.style.display = 'inline-block',
            campo.style.display = 'none'
        )
    } else {
        seuDesc()
    }

    function seuDesc() {

        campo.style.display = 'block'

        mensagemProduto.style.display = 'none';
        mensagemDesconto.style.display = 'none';

        let calcDesc = descProduto / 100;
        let calcularPor = valorProduto * calcDesc;
        let saberDesc = valorProduto - calcularPor;

        return resultado.innerText = "Seu desconto é de R$" +
            calcularPor.toFixed(2) + "💸" +
            "\nCom o desconto aplicado de " + (calcDesc * 100).toFixed(0) + "%" + " o valor que é R$" +
            valorProduto +
            " passará a ser R$" +
            saberDesc.toFixed(2);
    }

}