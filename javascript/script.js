// 1 criar um código onde irá aparecer um prompt na tela me pedindo um valor e outro prompt me pedindo um desconto entre 1% a 99%, em seguida aparece um alert me mostrando o valor que foi descontado. 
/*
Adicionar uma função que em determinado horário, o primero prompt irá mostrar Bom dia, Boa tarde ou Boa noite
EX: "Bom dia, Digite um valor a ser descontado"
EX: "Boa tarde, Digite um valor a ser descontado"
EX: "Boa noite, Digite um valor a ser descontado"
*/


function calcDesc(preco, desconto) {
    this.desconto = desconto;
    this.preco = null;

    Number(preco) ? this.preco = preco : this.preco = 0;

    if (this.desconto >= 1 && this.desconto <= 100) {
        this.desconto /= 100;
    } else if (this.desconto < 1) {
        return alert("ERROR\nVocê digitou uma porcentagem menor que 1")
    } else if (this.desconto > 100) {
        return alert("ERROR\nVocê digitou uma porcentagem maior que 100")
    } else {
        return alert("ERROR")
    }

  

    this.calcularDecs = this.preco * this.desconto;

    this.saberDecs = function () {
        return this.preco - this.calcularDecs;
    }

    return alert("Seu desconto é de R$" +
        this.calcularDecs.toFixed(2) +
        "\nCom o desconto aplicado de " + (this.desconto * 100) + "%" + " o valor que é R$" +
        this.preco.toFixed(2) +
        " passará a ser R$" +
        this.saberDecs().toFixed(2));
}



function mostrarHora() {

    var data = new Date();

    if (data.getHours() >= 6 && data.getHours() <= 12) {
        var conceito = "Bom dia";
    } else if (data.getHours() > 12 && data.getHours() <= 18) {
        conceito = "Boa tarde"
    } else {
        conceito = "Boa noite"
    }

    return conceito
}


let valorDigitado = parseFloat(prompt(mostrarHora() + "\nDigite um valor a ser descontado"));

let descDigitado = parseFloat(prompt("Digite a porcentagem do desconto"));

calcDesc(valorDigitado, descDigitado);