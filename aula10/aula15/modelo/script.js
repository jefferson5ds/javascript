function contar(){
    var ini = window.document.getElementById('txti');
    var fim = window.document.getElementById('txtf');
    var passo = window.document.getElementById('txtp');
    let res = window.document.getElementById('res');

    if (ini.value.lenght  == 0  || fim.value.lenght == 0 || passo.value.lenght == 0 ){
       window.alert('[erro] faltam dados')
       res.innerHTML = 'impossivel contar!'
    }else{
         res.innerHTML = 'Contando'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c= i; c <= f ; c += p ){
            res.innerHTML += `${c}`
        }

    }
    
    




}








