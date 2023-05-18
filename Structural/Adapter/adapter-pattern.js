/**
 * Adapter Pattern
 * 
 * The Adapter allows two objects with incompatible interfaces to interact with each other
 * 
 * Say we have an array of cities and a function that returns the greatest number of habitants any of those cities have. The number of inhabitants in our array is in millions, but we have a new city to add that has its habitants without the million conversion.
 */

const citiesHabitantsInMillions = [
    {   city: 'London', habitants: 8.9    },
    {   city: 'Rome', habitants: 2.8    },
    {   city: 'New York', habitants: 8.8    },
    {   city: 'Paris', habitants: 2.1    },
];

const BuenosAires = {
    city: 'Buenos Aires',
    habitants: 3100000
};

const toMillionAdapter = city => {
    city.habitants = parseFloat((city.habitants / 1000000).toFixed(1));
}

toMillionAdapter(BuenosAires);

citiesHabitantsInMillions.push(BuenosAires);

const MostHabitantsInMillions = () => {
    return Math.max(...citiesHabitantsInMillions.map(city => city.habitants))
};

console.log(MostHabitantsInMillions());