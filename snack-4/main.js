//Snack 4:
//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
//prendendo alternativamente gli elementi da uno e dall’altro
var lettere = ["a","b","c","d","e","f","g"];
var numeri = [1,2,3,4,5,6,7];
var lettereNumeri =[];
/**
 * Questa funzione unisce due array della stessa lunghezza in un terzo array, prendendo gli elementi alternativamente tra i due array.
 * @param  {Array} array1 Il primo Array
 * @param  {Array} array2 Il secondo Array
 * @return {Array}      Il terzo array, con gli elementi dei primi due array in modo alternato
 */
function ConcatArray(array1,array2){
    var arrayConcatenato=[];
    for(var i=0;i<array1.length;i++){
        arrayConcatenato.push(array1[i])
        arrayConcatenato.push(array2[i])
    }
    return arrayConcatenato
}
lettereNumeri=ConcatArray(lettere,numeri)
console.log(lettereNumeri);