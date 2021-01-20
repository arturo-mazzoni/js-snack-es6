// ***********snack 1**********************************

// Utilizzando const e/o let inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// let n = parseInt(prompt("inserisci un numero"));
//
// if (n % 2 == 0){
//   console.log(n);
// } else {
//   n = parseInt(prompt("inserisci un numero"));
//   console.log(n);
// }


// ***********snack 2**********************************

// Utilizzando const e/o let e template literal creare due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// const numeri = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// const pari = [];
// const dispari = [];

// for (let i = 0; i < numeri.length; i++){
//   if (numeri[i] % 2 == 0){
//     pari.push(numeri[i]);
//   } else {
//     dispari.push(numeri[i]);
//   }
// }
//
// for (let i = 0; i < pari.length; i++){
//   document.getElementById("green").innerHTML += `${pari[i]}`;
// }
//
// for (let i = 0; i < dispari.length; i++){
//   document.getElementById("red").innerHTML += `${dispari[i]}`;
// }


// ***********snack 3**********************************

// Utilizzando const e/o let. Dare la possibilità di inserire due parole.
// Verificare se le due parole hanno la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// const word1 = prompt("inserisci una parola");
// const word2 = prompt("inserisci una parola");
//
// if (word1.length == word2.length){
//   console.log(word1 + " " + word2);
// }else if (word1.length < word2.length){
//   console.log(word2);
// }else {
//   console.log(word1);
// }


// ***********snack 4**********************************

// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const bici = [
  {
    nome : "bianchi",
    peso : "2"
  },
  {
    nome : "cipollini",
    peso : "5"
  }
];

const {peso} = bici;
console.log(peso);



// ***********snack 5**********************************


// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter

// const array = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
























// zxcvasdgvsafd
