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



// se l utente ha meno di 18 anni manda a schermo il prezzo scontato del 20%

if (etaUtente < 18) {
    // parte di calcolo------------
    let risultato = prezzoAlKm * 0.2;
    
    prezzoScontato = prezzoAlKm - risultato;
    
    prezzoScontato =`${prezzoScontato.toFixed(2)} Euro, prezzo scontato del 20%`;
    //---------------------------------------------------------
    
    // Stampa Console
    console.log(prezzoScontato, "soggetto a sconto");
    // Stampa Nella Pagina
    document.getElementById("sconto").innerHTML = prezzoScontato;

// altrimenti se l utente ha più di 65 anni manda a schero il prezzo scontato del 40%    

} else if (etaUtente > 65) {
    // parte di calcolo
    let risultato = prezzoAlKm * 0.4;
   
    prezzoScontato = prezzoAlKm - risultato;
   
    prezzoScontato =`${prezzoScontato.toFixed(2)} Euro, prezzo scontato del 40%`;
    //----------------------------------------------------------------------
    
    // Stampa Console
    console.log(prezzoScontato, "soggetto a sconto");
     // Stampa Nella Pagina
    document.getElementById("sconto").innerHTML = prezzoScontato;

// altrimenti manda a schermo il prezzo intero    

} else {
    
    prezzoAlKm =`${prezzoAlKm.toFixed(2)} Euro, prezzo intero`;
    
    console.log(prezzoAlKm, "non soggetto a sconto");
    
    document.getElementById("intero").innerHTML = prezzoAlKm;
}







    







