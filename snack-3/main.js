/*Snack 3:
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)*/

/**
 * Questa funzione rovescia la stringa inserita.
 * La stringa viene prima divisa in singoli caratteri, poi rovesciata ed infine riconvertita in stringa
 * @param  {String} stringa //accetta una stringa come argomento
 * @return {String} //La stringa rovesciata
 */
function reverse(stringa){
    return stringa.split("").reverse().join("");
}
//esempi
console.log(reverse("ciao"));
console.log(reverse("giallo"));
console.log(reverse("libro"));