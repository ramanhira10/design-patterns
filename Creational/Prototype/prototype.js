/**
 * Prototype Pattern
 * The Prototype pattern allows you to create an object using another object as a blueprint, inheriting its properties and methods. This is same as prototypal inheritance in javascript.
 * 
 * The end result is very similar to what we get by using classes, but with a little more flexibility since properties and methods can be shared between objects without depending on the same class.
 */

const enemy = {
    attack: () => console.log('Pim Pam Pum!!'),
    flyAway: () => console.log('Flyyy like an eagle')
};

const bug1 = {
    name: 'Buggy McFly',
    phrase: 'Your debugger doesn\'t work with me!'
}

Object.setPrototypeOf(bug1, enemy);

console.log(Object.getPrototypeOf(bug1));

console.log(bug1.phrase);

console.log(bug1.attack());

console.log(bug1.flyAway());