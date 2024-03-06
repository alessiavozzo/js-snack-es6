const zucchine = [
    {
        varietà: "zucchina1",
        peso: 2,
        lunghezza: 15
    },
    {
        varietà: "zucchina2",
        peso: 5,
        lunghezza: 16
    },
    {
        varietà: "zucchina3",
        peso: 3,
        lunghezza: 17
    },
    {
        varietà: "zucchina4",
        peso: 2,
        lunghezza: 18
    },
    {
        varietà: "zucchina5",
        peso: 4,
        lunghezza: 19
    },
    {
        varietà: "zucchina6",
        peso: 5,
        lunghezza: 20
    },
    {
        varietà: "zucchina7",
        peso: 1,
        lunghezza: 15
    },
    {
        varietà: "zucchina8",
        peso: 1,
        lunghezza: 30
    },
    {
        varietà: "zucchina9",
        peso: 10,
        lunghezza: 15
    },
    {
        varietà: "zucchina10",
        peso: 2,
        lunghezza: 16
    },
]

let totWeight = 0;
zucchine.forEach(zucchina => {
    console.log(zucchina.peso);
    totWeight += zucchina.peso;
})
console.log(totWeight);