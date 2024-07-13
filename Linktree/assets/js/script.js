function toggleMode(){
    const html = document.documentElement
    
    html.classList.toggle('light')

    //Pegar a imagem
    const img = document.querySelector(".profile-img")

    //substituir a imagem
    if(html.classList.contains('light')){
        img.setAttribute('src','./assets/images/avatar-light.jpg')
        img.setAttribute('alt','Foto de Felipe sorrindo com o fundo amarelo')
    } else{
        img.setAttribute('src','./assets/images/avatar.jpg')
        img.setAttribute('alt','Foto de Felipe sorrindo de oculos escuro usando casaco preto e atras dele um lago e uma montanha')
    }

}

