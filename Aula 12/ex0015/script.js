function verificar(){
    //window.alert('Funcionou')
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txt_ano')
    var res = document.getElementById('res')
    if(f_ano.value.length == 0 || f_ano.value > ano){
        window.alert('Erro! verifique os dados de entrada')
    }else{
        var f_genero = window.document.getElementsByName('radio_genero')
        var idade = ano - Number(f_ano.value) // Pegar o valor dentro de 'f_ano' e coonverter para int
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //res.innerHTML = `A idade calculada é ${idade}`
        var genero = ''
        if (f_genero[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'crianca.png')
            }else if(idade <= 21){
                img.setAttribute('src', 'jovem_h.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto_h.png')
            }else{
                img.setAttribute('src', 'idoso_h.png')
            }
        }else if (f_genero[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'crianca.png')
            }else if(idade <= 21){
                img.setAttribute('src', 'jovem_m.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto_m.png')
            }else{
                img.setAttribute('src', 'idoso_m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}