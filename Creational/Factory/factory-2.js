/** Factory method pattern using function */

function Alien (name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = 'Alien';
}

Alien.prototype.fly = () => console.log('Zzzzzzzziiiinng');
Alien.prototype.sayPhrase = () => console.log(this.phrase);

const alien1 = new Alien('Ali', 'I\'m the Alien');

console.log(alien1.name);
console.log(alien1.phrase);
alien1.fly();