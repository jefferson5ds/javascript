let adicionar = window.document.getElementById('iadicionar');
let lista = window.document.getElementById('lista');
let res = window.document.getElementById('res');
let valores = []



function num(n){
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
    if (num(adicionar.value) && ilista(adicionar.value,valores)){
        window.alert(' tudo ok!')
    
       

    }else {
        window.alert('[erro] numero nao encontrado');
    }
     

}
