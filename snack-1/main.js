/*Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.*/

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
var pesoTotale = 0;

    for (var i = 0; i < Zucchine.length; i++) {
     pesoTotale += Zucchine[i].peso;
    }
console.log("Il peso totale delle zucchine è "+pesoTotale+" kg");