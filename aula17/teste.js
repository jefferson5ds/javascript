let valores =[8,1,7,4,2,9]

 console.log(valores)
 /*
for (let pos =0; pos < valores.lenght; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
*/


for (let pos in valores){
    console.log (`a posição ${pos} tem o valor ${valores[pos]}`)
}