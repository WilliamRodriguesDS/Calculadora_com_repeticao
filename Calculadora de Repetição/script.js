function iniciarCalculoeCalcular(){
    while(true){
        let menu = prompt("Digite 1 para adição ou 2 para substração ou 3 para multiplicação ou 4 para divisão ou 5 para sair");

        let menuValor = parseInt(menu);

        if(menuValor === 5){
            alert("Programa terminado por sair!");
            break;
        }

        if(menu === null){
            alert("Programa terminado por cancelar!");
            break;
        }

        let n1 = parseFloat(prompt("Digite um número"));
        let n2 = parseFloat(prompt("Digite outro número"));

        switch(menuValor){
            case 1:
                alert(n1 + n2);
                break;
            case 2:
                alert(n1 - n2);
                break;
            case 3:
                alert(n1 * n2);
                break;
            case 4:
                if(n1 === 0 || n2 === 0){
                    alert("Erro, tente novamente!");
                }
                else{
                     alert(n1 / n2);
                }
            default:
                    alert("Operação não idenficado, tente novamente");

            }


    }
}