/** Factory Method Pattern
 * The Factory method pattern provides an interface for creating objects that can be modified after creation. The creation of objects can happen at one centralized single place. It helps in simplifying and better organizing our code.
*/

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