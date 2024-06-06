const person = {
    name: 'Arno Deckx',
    age: 19,
    city: 'Halle',
    hobbys: 'Scouts, basketbal, gamen'
};

const { name, age, city, country } = person;

const introduction = `Hallo, Mijn naam is ${name}. Ik ben ${age} jaar oud en woon in ${city}. Mijn vrije tijd besteed ik aan ${hobbys}.`;

console.log(introduction);