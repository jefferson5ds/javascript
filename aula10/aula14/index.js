function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value)> ano ){
        window.alert('[erro] verificar os dados e tente novamento!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' ,'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0  && idade < 10 ){
                 //criaça
                 img.setAttribute('src', 'menino.jpg')
            }else if  ( idade < 21) {
               // jovem
               img.setAttribute('src', 'adolescentehomem.jpg')
            }else if (idade <50) {
              // adulto
              img.setAttribute('src', 'homemadulto.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'homemidoso.jpg')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0  && idade < 10 ){
                //criaça
                img.setAttribute('src', 'menina.jpg')
           }else if  ( idade < 21) {
              // jovem
              img.setAttribute('src', 'adolescentemulher.jpg')
           }else if (idade <50) {
             // adulto
             img.setAttribute('src', 'mulheradulta.jpg')
           }else {
               //idoso
               img.setAttribute('src', 'mulheridosa.jpg')
           }
            

        }
        
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
} 