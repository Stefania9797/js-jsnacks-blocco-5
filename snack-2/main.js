//Snack 2:
//Crea 10 oggetti che rappresentano una zucchina.
var Zucchine = [
    {varietà:"Zucchina bolognese", peso: 70, lunghezza:8},
    {varietà:"Zucchina scura", peso: 100, lunghezza:10},
    {varietà:"Zucchina chiara", peso: 40, lunghezza:15},
    {varietà:"Zucchina milanese", peso: 61, lunghezza:4},
    {varietà:"Zucchina romanesca", peso: 30, lunghezza:6},
    {varietà:"Zucchina fiorentina", peso: 50, lunghezza:13},
    {varietà:"Zucchina friulana", peso: 63, lunghezza:6},
    {varietà:"Zucchina gialla", peso: 89, lunghezza:11},
    {varietà:"Zucchina messicana", peso: 31, lunghezza:17},
    {varietà:"Zucchina bolognese", peso: 59, lunghezza:14},
]
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchineCorte=[];
var zucchineLunghe=[];

for (var i = 0; i < Zucchine.length; i++) {
    if(Zucchine[i].lunghezza<15){
        zucchineCorte.push(Zucchine[i])
    }
    else if(Zucchine[i].lunghezza>=15){
        zucchineLunghe.push(Zucchine[i])
    }
}
console.log(zucchineCorte);
console.log(zucchineLunghe);

//Infine stampa separatamente quanto pesano i due gruppi di zucchine.
function pesoTotale(array) {
    var pesoTotale = 0;
    for (var i = 0; i < array.length; i++) {
        pesoTotale += array[i].peso;
    }
    return pesoTotale;
}
console.log("Il peso totale delle zucchine corte è "+pesoTotale(zucchineCorte)+" kg");
console.log("Il peso totale delle zucchine lunghe "+pesoTotale(zucchineLunghe)+" kg");
/*var pesoZucchineCorte=0;
var pesoZucchineLunghe=0;
for (var j = 0; j < Zucchine.length; j++) {
    pesoZucchineCorte += Zucchine[i]["peso"];
}*/
