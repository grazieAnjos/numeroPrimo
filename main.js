function validarNumero (){
    var numero = parseInt(document.getElementById('numero').value);

    if(numero < 0 || numero > 100){
        alert("O numero que você escolheu não entá entre 0 e 100, por favor escolha outro.")
    }
    else{
        somarNumeroPrimo(numero);
    }

}

function somarNumeroPrimo (numero){
    var divisores = 0;
    var resposta = document.getElementById('resultado');

    for (var i = 1; i <= numero; i++){
        if(numero % i == 0){
            divisores++;

        }
    }

    if (divisores == 2){
        resposta.innerHTML = "Seu número escolhido foi é um número primo.";

    }
    else{
        resposta.innerHTML = "Seu número escolhido não é um número primo.";
    }


}