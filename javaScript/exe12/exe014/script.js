function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12){
        img.src = 'imagen/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >=12 && hora <= 18){
        img.src = 'imagen/tarde.jpg'
        document.body.style.background = '#b9849f'
    } else{
        img.src = 'imagen/noite.jpg'
        document.body.style.background = '#515154'    
    }
}