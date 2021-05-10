/*Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” 
grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno 
la posizione compresa tra “a” e “b”*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function GetNewArray(array,a,b){
    var newArray=[];
    for(var i=0; i<array.length;i++){
    if(array[i]>=a && array[i]<=b){ //|| array[i]<=b
        newArray.push(array[i])
    }
}
    return newArray
}
//numeri a e b
var randomArray= [1,2,3,4,5,6,7,8,9,10]
var a=getRandomNumber(1,randomArray.length)
var b=getRandomNumber((a+1),randomArray.length)
console.log(a,b);
console.log(GetNewArray(randomArray,a,b));