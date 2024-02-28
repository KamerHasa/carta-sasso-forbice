// 4. Il tuo gioco giocherà contro il computer, 
//     quindi inizia con una funzione chiamata getComputerChoice che restituirà casualmente 'Rock', 
//      'Paper' o 'Scissors'. Utilizzeremo questa funzione nel gioco per determinare la mossa del computer. 
//      Suggerimento: usa la console per assicurarti che restituisca l'output atteso prima di passare al 
//        passaggio successivo!
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
             return "sasso";
        case 1:
             return "forbice";
        case 2:
             return "carta";
    }
}

let sceltaPc=getComputerChoice();

// 5. Scrivi una funzione che esegue un singolo round di Rock Paper Scissors. 
//  La funzione dovrebbe prendere due parametri - playerSelection e computerSelection - 
//  e quindi restituire una stringa che dichiara il vincitore o il pareggio del round in questo modo: 
//  "Hai perso! La carta batte il sasso"
var btnCarta = document.getElementById("btnCarta");
var btnForbice = document.getElementById("btnForbice");
var btnSasso = document.getElementById("btnSasso");


btnCarta.addEventListener("click", function() {
    const sceltaUtente = btnCarta.value;
    round(sceltaUtente);
});


btnForbice.addEventListener("click", function() {
    const sceltaUtente = btnForbice.value;
    round(sceltaUtente);
});

btnSasso.addEventListener("click", function() {
    const sceltaUtente = btnSasso.value;
    round(sceltaUtente);
});

let ris;

function round(sceltaUtente) {
    
    console.log("Round - Scelta Utente  : " + sceltaUtente)
    console.log("Round - Scleta PC      : " + sceltaPc)

    if (sceltaUtente === sceltaPc) {
        ris = "Grande pareggio";
    }
    else if ((sceltaUtente === 'sasso' && sceltaPc === 'forbice')||
            (sceltaUtente === 'carta' && sceltaPc === 'sasso')||
            (sceltaUtente === 'forbice' && sceltaPc === 'carta')) {
        ris = "Hai vinto | " + sceltaUtente + " contro " + sceltaPc;
    } else {
            ris = "Hai perso | " + sceltaPc + " contro " +sceltaUtente;
    }
    console.log(ris + "\n\n\n\n");
    return ris;
}


