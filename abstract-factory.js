/** Abstract Factory Method pattern */

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