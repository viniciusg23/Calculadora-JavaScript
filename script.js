

let operacao = function(x){
    let valor = document.getElementById("valor");
    valor.value = valor.value + x;
}

let limpar = function(){
    let valor = document.getElementById("valor");
    valor.value = "";
}

let prox = function(a){
    let valor = document.getElementById("valor");
    valor.value = a;
}

let resultado = function(){
    let valor = (document.getElementById("valor").value);
    let result = eval(valor);
    console.log(result);
    prox(result);
}


