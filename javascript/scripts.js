let valorProduto = document.getElementById('valor');
let descProduto = document.getElementById('porcentagem');
let resultado = document.getElementById('resultDesc');
let campo = document.getElementById('campoResultado');


let calcular = document.getElementById('calcDesc');
calcular.addEventListener('click', desconto);

function desconto() {

    
    campo.style.display = 'block'

    let calcDesc = (descProduto.value / 100);
    let calcular = valorProduto.value * calcDesc;
    let saberDesc = valorProduto.value - calcular;



    return resultado.innerText = "Seu desconto é de R$" +
        calcular.toFixed(2) + "💸" +
        ".\nCom o desconto aplicado de " + (calcDesc * 100).toFixed(0) + "%" + " o valor que é R$" +
        valorProduto.value +
        " passará a ser R$" +
        saberDesc.toFixed(2) + "."


}