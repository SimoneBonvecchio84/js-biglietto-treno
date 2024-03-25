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

let prezzoScontato = 0;



if (etaUtente < 18) {
    let risultato = prezzoAlKm * 0.2;
    prezzoScontato = prezzoAlKm - risultato;
    prezzoScontato =`${prezzoScontato.toFixed(2)} Euro, prezzo scontato`;
    document.getElementById("sconto").innerHTML = prezzoScontato;
} else if (etaUtente > 65) {
    let risultato = prezzoAlKm * 0.4;
    prezzoScontato = prezzoAlKm - risultato;
    document.getElementById("sconto").innerHTML = prezzoScontato;
} else {
    console.log("prezzo intero")
    prezzoAlKm =`${prezzoAlKm.toFixed(2)} Euro, prezzo intero`;
    document.getElementById("intero").innerHTML = prezzoAlKm;
}


console.log(prezzoAlKm);

console.log(prezzoScontato);


    







