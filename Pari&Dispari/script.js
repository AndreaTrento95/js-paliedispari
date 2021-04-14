/* ESERCIZIO: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */
//-------------------------------------------------------------------------------


// l'utente sceglie tra pari e dispari
var scelta_utente = prompt("Scegli tra pari e dispari");

// l'utente inserisce un numero compreso tra 1 e 5
var numero_utente = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));
var scelta_pc = number_generator();
console.log(scelta_pc);

// sommo i due numeri
var somma = numero_utente + scelta_pc;

// verifico chi ha vinto 
var output = pari_dispari(somma);
console.log(output);




// -------- FUNCTION ------------

// funzione per generare un numero random compreso tra 1 e 5 per il computer 
function number_generator(){
    var numero_pc = Math.floor(Math.random() * 5) +1;
    return numero_pc;
}

// funzione per stabilire se somma è pari o dispari 
function pari_dispari(numero){
    var risultato = "";
    if(numero % 2 === 0){
        console.log("E' PARI");
        if(scelta_utente === "pari"){
            risultato = "HAI VINTO";
        }else{
            risultato = "HAI PERSO";
        }
    }else{
        console.log("E' DISPARI");
        if(scelta_utente === "dispari"){
            risultato = "HAI VINTO";
        }else{
            risultato = "HAI PERSO";
        }
    }
    return risultato;
}



