// INPUT

// chiediamo all'utente i Km che deve percorrere
let kmDaPercorrere = prompt("quanti Km devi percorrere"); // string

// convertiamo la stringa in un valore numerico
kmDaPercorrere = parseInt(kmDaPercorrere); // number

// chidediamo all'utente la sua età
let etaUtente = prompt("quanti anni hai"); // string

// convertiamo la stringa in un valore numerico
etaUtente = parseInt(etaUtente); // number

// ESECUZIONE LOGICA

let prezzoAlKm = kmDaPercorrere * 0.21;
prezzoAlKm = prezzoAlKm.toFixed(2);
let prezzoScontato = "";

console.log(prezzoAlKm);

if (etaUtente < 18) {
    let risultato = prezzoAlKm * 0.2;
    prezzoScontato = prezzoAlKm - risultato;
} else if (etaUtente > 65) {
    let risultato = prezzoAlKm * 0.4;
    prezzoScontato = prezzoAlKm - risultato;
} else {
    console.log("prezzo intero")
}

prezzoScontato =`${prezzoScontato.toFixed(2)} Euro`;

console.log(prezzoScontato);

//OUTPUT

document.getElementById("sconto").innerHTML = prezzoScontato;



