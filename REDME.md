# Prezzo del biglietto

1. Chiediamo all'utente i chilometri che vuole percorrere.
2. Chiediamo all'utente quanti anni ha, e sulla base di ciò applichiamo lo sconto.
---
3. INPUT 
   - [] Chiediamo all'utente i km che vuole percorrere.
   - [] Chiediamo all'utente quanti anni ha.
---
4. ESECUZIONE LOGICA
    Calcolo Prezzo
   - [] calcoliamo il prezzo del biglietto in base ai Km da percorrere
    ---
     Se (L'utente ha un età inferiore ha 18 anni)
            risultato = prezzoTotale * 0.20
     
     Altrimenti Se (L'utente ha più di 65 anni) 
            risultato = prezzoTotale * 0.40  

     Altrimenti              
            non viene applicato nessuno sconto
    
    Adattamento
    - [] Il prezzo finale deve essere adattato in forma umana
---

5. OUTPUT
    - [] Stampiamo prezzo finale del biglietto