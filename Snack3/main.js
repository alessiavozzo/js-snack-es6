const myAnimals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'echidna',
        famiglia: 'tachiglossidi',
        classe: 'mammiferi'
    },
    {
        nome: 'piccione',
        famiglia: 'colombidi',
        classe: 'uccelli'
    },
    {
        nome: 'pitone',
        famiglia: 'pitonidi',
        classe: 'rettili'
    },
]

const mammaliaAnimals = myAnimals.filter(animal => animal.classe === "mammiferi");
console.log(mammaliaAnimals);