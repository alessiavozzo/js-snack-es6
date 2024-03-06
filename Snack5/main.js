const racingBike = [
    {
        name: "Bike1",
        weight: 25
    },
    {
        name: "Bike2",
        weight: 35
    },
    {
        name: "Bike3",
        weight: 45
    },
    {
        name: "Bike4",
        weight: 15
    },
    {
        name: "Bike5",
        weight: 55
    },
    {
        name: "Bike6",
        weight: 25
    },
]

const bodyElement = document.querySelector("body");

let minWeight = 100;
let bikeName;
racingBike.forEach(bike => {
    const {weight, name} = bike;
    if(weight < minWeight){
        minWeight = weight;
        bikeName = name;
    }
})

const divElement = document.createElement("div");
bodyElement.append(divElement);
divElement.innerHTML = `La bici che pesa di meno è ${bikeName} e pesa ${minWeight} kg`