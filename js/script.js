// ***********snack 1**********************************

// Utilizzando const e/o let inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// let n = parseInt(prompt("inserisci un numero"));
//
// if (n % 2 == 0){
//   console.log(n);
// } else {
//   let n = parseInt(prompt("inserisci un numero"));
//   console.log(n);
// }


// ***********snack 2**********************************

// Utilizzando const e/o let e template literal creare due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// const numeri = [11, 22, 33, 44, 55, 66, 77, 88, 99];
//
// for (let i = 0; i < numeri.length; i++){
//   if (numeri[i] % 2 == 0){
//     document.getElementById("green").innerHTML = numeri[i];
//   }
// }





// ***********snack 3**********************************

// Utilizzando const e/o let. Dare la possibilità di inserire due parole.
// Verificare se le due parole hanno la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let word1 = prompt("inserisci una parola");
let word2 = prompt("inserisci una parola");

if (word1.length == word2.length){
  console.log(word1 + " " + word2);
}else if (word1.length < word2.length){
  console.log(word2);
}else {
  console.log(word1);
}






















// sdfgfg
