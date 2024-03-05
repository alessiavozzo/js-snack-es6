const people = [
    {
        nome: "Alessia",
        cognome: "Vozzo",
        età: 28
    },
    {
        nome: "Mario",
        cognome: "Rossi",
        età: 20
    },
    {
        nome: "Paolo",
        cognome: "Bonolis",
        età: 15
    },
    {
        nome: "Lucifer",
        cognome: "Morningstar",
        età: 5
    },
    {
        nome: "Cubo",
        cognome: "Rubik",
        età: 80
    },
    {
        nome: "Papera",
        cognome: "Gialla",
        età: 17
    },
    {
        nome: "Elena",
        cognome: "Schermo",
        età: 21
    },
]

//Se vuole un nuovo array con nome, cognome e messaggio (senza età)
/* const drivingPeople = people.map(person => {
    if(person.età < 18){                      
        person.message = "non può guidare";
        delete person.età;
    }
    else{
        person.message = "può guidare";
        delete person.età;
    }
    return person;
})
console.log(drivingPeople); */

//se vuole un nuovo array di sole frasi con indicato nome, cognome e messaggio
/* let message = "";
const drivingPeople = people.map(person => {
    if(person.età < 18){                      
        message = `${person.nome} ${person.cognome} non può guidare`;
    }
    else{
        message = `${person.nome} ${person.cognome} può guidare`;
    }
    return message;
})
console.log(drivingPeople); */

//se vuole un nuovo array con i dati originari + un messaggio come nuova proprietà
const drivingPeople = people.map(person => {
    if(person.età < 18){                      
        person.message = `${person.nome} ${person.cognome} non può guidare`;
    }
    else{
        person.message = `${person.nome} ${person.cognome} può guidare`;
    }
    return person;
})
console.log(drivingPeople);