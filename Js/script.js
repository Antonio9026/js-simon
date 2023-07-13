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
setInterval(refreshOra, 1000);

let orologio = document.getElementById("orario")
function refreshOra() {
    dataOggi = new Date()
    orologio.innerHTML = dataOggi.getHours() + ":" + dataOggi.getMinutes() + ":" + dataOggi.getSeconds()
    // console.log(getHours() + getMinutes() + getSeconds());
}



