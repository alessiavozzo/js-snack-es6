const footballTeams = [
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juve",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Bologna",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    }
]

const bodyElement = document.querySelector("body")

//per ogni team voglio che al posto di punti fatti e falli subiti ci sia un numero a caso
footballTeams.forEach(team => {
    team.puntiFatti = getRandomNumber();
    team.falliSubiti = getRandomNumber();
})
console.log(footballTeams);

//creo un altro array come quello d'origine ma con punti e falli casuali voglio che ogni elemento contenga come proprietà solo nome della squadra e falli subiti
//versione1
/* const updatedFootballTeams = footballTeams.map(team => {
    const {nome, falliSubiti} = team;
    delete team.puntiFatti;
    return team
})
console.log(updatedFootballTeams); */

//versione2
const updatedFootballTeams = footballTeams.map(team => {
    const { nome, falliSubiti } = team;
    return { nome, falliSubiti };
})
console.log(updatedFootballTeams);

updatedFootballTeams.forEach(team => {    

    const markup = `<div class="container w-50">
    <div class="row row-cols-2">
        <div class="col border text-center fw-bold">
        ${team.nome}        
        </div>
        <div class="col border">
            ${team.falliSubiti}
        </div>
    </div>
    </div>`
    bodyElement.innerHTML += markup;
})






//generare numeri random
/**
 * 
 * @returns {number}
 */
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}