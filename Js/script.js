// main.js
"use strict"


// Traccia
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Consigli
// Questo esercizio richiede un po’ di ricerca ma anche un po’ di domande che accompagnano l’uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un’ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?
// Buon divertimento a tutte e a tutti!
let dataOggi = new Date()
let dataDomani = new Date (2023,6,14,9,30) 
 let countdown = setInterval(refreshOra, 1000);

let orologio = document.getElementById("orario")
let tempoMancanteOut = document.getElementById("tempo_mancante")


dataOggi = new Date()
orologio.innerHTML = dataOggi.getHours() + ":" + dataOggi.getMinutes() + ":" + dataOggi.getSeconds()





// funzione set interval per orologio 
function refreshOra() {
    // richiamo costante per stabilire orario 
    dataOggi = new Date()
    // stampo in pagina
    orologio.innerHTML = dataOggi.getHours() + ":" + dataOggi.getMinutes() + ":" + dataOggi.getSeconds()
 

}

// creo funzione per fare countdownn 
let countDown = setInterval (function(){
    // richiamo funzione per data odierna 
dataOggi = new Date()
orologio.innerHTML = dataOggi.getHours() + ":" + dataOggi.getMinutes() + ":" + dataOggi.getSeconds()
// creo variabili per calcorare countdown 
let differenzaMs = (dataDomani - dataOggi);//differenza tra giorni in millisecondi
let differenzaHr = Math.floor((differenzaMs  % 86400000) / 3600000); // ore
let differenzaMin = Math.round(((differenzaMs % 86400000) % 3600000) / 60000); // minuti
let differenzaSc = Math.floor((((differenzaMs % 86400000)%3600000) % 60000) /1000); // secondi

// stampo countDown in pagina 
 tempoMancanteOut.innerHTML = differenzaHr + " ore, " + differenzaMin + " minuti, " + differenzaSc + "secondi, "
//  creo condizione in modo che allo scadere del tempo faccio compare un alert alla fine del countdownm 
if (differenzaMs < 0) {
    alert("Buona lezione")

    clearInterval(countDown)
}
},500)
   
  
  


    

