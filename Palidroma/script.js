/* ESERCIZIO: Chiedere all’utente di inserire una parola
              Creare una funzione per capire se la parola inserita è palindroma */

// Chiedo all'utente di inserire una parola
var parola_utente = prompt("Inserisci una parola");
/* console.log(parola_utente.length); */

// verifico se la parola_utente è un palindromo
var parola_palindroma = palindromo(parola_utente);

if(parola_palindroma === parola_utente){
    console.log(parola_palindroma + " è un palindromo");
}else{
    console.log("undefined");
}




// ----------- FUNCTION -----------------
// creo una funzione per invertire la parola
function palindromo(word){
   var letter = word.length - 1;
   var total = "";
   for(var i = letter; i >= 0; i--){
       var single = letter[i];
       total += single;
   }
   return total;
}