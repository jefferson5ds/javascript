let num = window.document.getElementById('iadicionar')
let lista = window.document.getElementById('lista')
let res = window.document.getElementById('res')
let valores = []



function iNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false 
    }


}

function ilista (n, l){
    if (l.indexOf(Number(n)) != -1 ){
        return true  
    }else {
        return false
    }
    
        
}        


function adicionar (){
    if (iNumero(num.value) && ! ilista(num.value,valores)){
        window.alert(' tudo ok!')
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text=`valor ${num.value} adicionado`
        lista.appendChild(item)

    
    
    }else {
        window.alert('[erro] numero nao encontrado');
    }
     

}




