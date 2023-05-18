/**
 * Builder pattern
 * The builder pattern is used to create objects in steps. Normally we will have functions or methods that add certain properties or methods to our object.
 * 
 * The cool thing about this pattern is that we separate the creation of properties and methods into different entities
 * 
 * If we had a class or a factory function, the object we instantiate will always have all the properties and methods declared in that class/factory. But using the builder pattern, we can create an object and apply to it only the steps we need. Which is more flexible approach.
 * 
 * Note: Learn about Object composition
 */

const bug1 = {
    name: 'Buggy McFly',
    phrase: 'Your debugger doesn\'t work for me'
};

const bug2 = {
    name: 'Martiniano Buggland',
    phrase: 'Can\'t touch this! Na na na na...'
};

const addFlyingAbility = obj => {
    obj.fly = () => console.log(`Now ${obj.name} can fly!`);
};

const addSpeechAbility = obj => {
    obj.saySmthg = () => console.log(`${obj.name} walks the walk and talks the talk`);
};

addFlyingAbility(bug1);
bug1.fly();

addSpeechAbility(bug2);
bug2.saySmthg();

