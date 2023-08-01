const combustivel  = 8.70;
const kmPolitros = 10;
const distanciaEmkm =100;

const litrosConsumidos = kmPolitros / distanciaEmkm;
const valorGasto = litrosConsumidos* combustivel;

console.log(valorGasto);