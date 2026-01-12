function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img_imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 118
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12)
        {//aqui tem que ter o bom dia :D
            //Imagem.Sourcer
            img.src = 'foto_manha.png' 
            document.body.style.background = '#fc9d72'
        }else if(hora >= 12 && hora <= 18 ){ //tarde
            img.src = 'foto_tarde.png'
            document.body.style.background = '#ca7a01'
        }else{//noite
            img.src = 'foto_noite.png'
            document.body.style.background = '#402550'
        }
}
    