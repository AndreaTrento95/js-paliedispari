/* ESERCIZIO: Chiedere all’utente di inserire una parola
              Creare una funzione per capire se la parola inserita è palindroma */

// Chiedo all'utente di inserire una parola
var parola_utente = prompt("Inserisci una parola");
var parola_palindroma = palindromo(parola_utente);
console.log(parola_palindroma);




// creo una funzione 
function palindromo(word){
   var letter = word.length;
   var total;
   for(var i = letter; i <= 0; i--){
       var single = letter[i];
       total += single;
       if(word === total){
           return total;
       }else{
           return undefined;
       }
   }
}