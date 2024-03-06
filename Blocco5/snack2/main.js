const zucchine = [
    {
        varietà: "zucchina1",
        peso: 2,
        lunghezza: 14
    },
    {
        varietà: "zucchina2",
        peso: 5,
        lunghezza: 13
    },
    {
        varietà: "zucchina3",
        peso: 3,
        lunghezza: 12
    },
    {
        varietà: "zucchina4",
        peso: 2,
        lunghezza: 11
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

//le corte
let sum = 0;
const zucchineCorte = zucchine.filter(zucchina =>{
    if(zucchina.lunghezza < 15){
        return zucchina
    }
})
console.log(zucchineCorte);
zucchineCorte.forEach(zucchina => sum += zucchina.peso)
console.log(sum);

//le lunghe
const zucchineLunghe = zucchine.filter(zucchina => zucchina.lunghezza >= 15)
console.log(zucchineLunghe);
zucchineLunghe.forEach(zucchina => sum += zucchina.peso)
console.log(sum);