/** Abstract Factory Method pattern
 * The pattern allow us to produce families of related objects without specifying concrete classes. It's useful in situations where we need to create objects that share only some properties and methods.
 * 
 * The way it works is by presenting an abstract factory the client interacts with. The abstract factory calls the corresponding concrete factory given the corresponding logic. And the concrete factory is one that returns the end object.
 * 
 * Basically it just adds an abstraction layer over the factory method pattern, so that we can create many different types of objecs, but still interact with a single factory function or class.
 */

class Car {

    constructor () {
        this.name = 'Car',
        this.wheels = 4;
    }

    turnOn = () => console.log('chacabum');
}

class Truck {
    constructor () {
        this.name = 'Truck';
        this.wheels = 8;
    }

    turnOn = () => console.log('rrrrrum');
}

class Motorcycle {
    constructor () {
        this.name = 'Motorcycle';
        this.wheels = 2;
    }

    turnOn = () => console.log('sssssssho');
}

const vehicleFactory = {
    createVehicle: type => {
        switch (type) {
            case 'car':
                return new Car();
            case 'truck':
                return new Truck();
            case 'motorcycle':
                return new Motorcycle();
            default:
                return null;
        }
    }
};


const car = vehicleFactory.createVehicle('car');
const truck = vehicleFactory.createVehicle('truck');
const motorcycle = vehicleFactory.createVehicle('motorcycle');

car.turnOn();
truck.turnOn();
motorcycle.turnOn();