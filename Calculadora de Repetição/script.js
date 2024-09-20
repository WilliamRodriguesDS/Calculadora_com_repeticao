function calcular(){
    while(true){
        let operacao = parseFloat(prompt("Digite um número para:\n" + "1 - adição\n"+ "2 - substração\n" + "3 - multiplicação\n" + "4 - divisão\n" + "5 - sair\n"));

        let resultado;

        if(operacao !== 1 && operacao !== 2 && operacao !== 3 && operacao !== 4 && operacao !== 5){
            alert("Operador não identificado, tente novamente")
        }
        else{
            if(operacao === 5){
                alert("Programa encerrado");
                break;
            }
            else{
                let n1 = parseFloat(prompt("Digite um número"));
                let n2 = parseFloat(prompt("Digite outro número"));

            switch(operacao){
                case 1:
                    resultado = "O resultado da soma " + n1 + " + " + n2 + " = "+ (n1 + n2);
                    alert(resultado);
                    break;
                case 2:
                    resultado = "O resultado da substração " + n1 + " - " + n2+ " = " + (n1 - n2);
                    alert(resultado);
                    break;
                case 3:
                    resultado = "O resultado da multiplicação " + n1 + " * " + n2 + " = " + (n1 * n2);
                    alert(resultado);
                    break;
                case 4:
                    if(n1 === 0 || n2 === 0){
                        alert("Erro! impossível dividir com número 0");
                    }
                    else{
                        resultado = "O resultado da divisão " + n1 + " / " + n2 + " = " + (n1 / n2);
                        alert(resultado);
                        break;
                    }
            }
            }
    }
}
    }
