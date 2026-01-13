function calcular(){
    var txt_incio = window.document.getElementById('txt_numero_inicio')
    var txt_fim = window.document.getElementById('txt_numero_fim')
    var txt_passos = window.document.getElementById('txt_passos')
    var txt_resultado = window.document.getElementById('resultado')
    if (txt_incio.value.length == 0 || txt_fim .value.length == 0 || txt_passos.value.length == 0){
        alert('ERRO! campos estão vazios')
    }else{
        //alert('Tudo ok')
        txt_resultado.innerHTML = 'contando: '
        var inicio = Number(txt_incio.value)
        var fim = Number(txt_fim.value)
        var passo = Number(txt_passos.value)

        for(var c = inicio; c <= fim; c += passo){
            txt_resultado.innerHTML += `${c} `
        }
    }
    //print para checar
    //window.alert(`Inicio ${txt_incio} Fim ${txt_fim} Passos ${txt_passos}`)
    /*var txt_resultado = window.document.getElementById('resultado')
    var c = 0
    while(c < txt_fim){
        txt_resultado.innerHTML += `${c}`
        c = c + txt_passos 
    } */ 
}