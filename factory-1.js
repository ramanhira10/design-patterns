/** Factory Method Pattern */

class Alien {
    constructor (name, phrase) {
        this.name = name;
        this.phrase = phrase;
        this.species = 'alien';
    }
    fly = () => console.log('Zzzzzzzzzziiiinnng')
    sayPhrase = () => console.log(this.phrase)
}

const alien1 = new Alien ('Ali', 'I\'m the alien');
console.log(alien1.name);
console.log(alien1.sayPhrase());