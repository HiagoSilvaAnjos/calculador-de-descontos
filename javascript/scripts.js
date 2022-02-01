let produto = document.getElementById('valor'); // Valor input
let desconto = document.getElementById('porcentagem'); // Valor input
let mensagemProduto = document.getElementById('sintaxePreco'); // Mensagem de erro
let mensagemDesconto = document.getElementById('sintaxeDesc'); // Mensagem de erro
let campo = document.getElementById('campoResultado'); // Div que aparece
let resultado = document.getElementById('resultDesc'); // Resultado


let calcular = document.getElementById('calcDesc');
calcular.addEventListener('click', calcularResult);



function calcularResult() {

    let valorProduto = produto.value; 
    let descProduto = desconto.value; 

    // Condicionais

    if (valorProduto == 0) {

        return (mensagemProduto.style.display = 'inline-block',
            campo.style.display = 'none',
            mensagemDesconto.style.display = 'none'
        )

    } else if (descProduto == 0) {

        return (mensagemDesconto.style.display = 'inline-block',
            campo.style.display = 'none',
            mensagemProduto.style.display = 'none'
        )

    }  else if (descProduto > 100 || descProduto < 0) {

        return (
            mensagemDesconto.style.display = 'inline-block',
            mensagemDesconto.innerText = "Essa porcentagem não existe",
            campo.style.display = 'none'
            )
    }

    else {

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
            "\nCom o desconto de " + (calcDesc * 100).toFixed(0) + "%" + " aplicado, o valor que é R$" +
            valorProduto +
            " passará a ser R$" +
            saberDesc.toFixed(2);
    }

}