function tabuada(){
    var numero = Number(window.document.getElementById('txt_numero').value)
    
    //alert(`Entrada = ${numero} do tipo :${typeof(numero)}`)
    var resultado = window.document.getElementById('resultado')
    for(i = 0; i <= 10; i++){
        resultado.innerHTML += `[${numero}] * [${i}] = [${numero * i}] </br>`
    }
}