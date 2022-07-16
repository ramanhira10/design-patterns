/** Singleton Pattern using object literal */

const Config = {
    start: () => console.log('App has started'),
    update: () => console.log('App has updated')
};

Object.freeze(Config);

Config.start();
Config.update();

Config.name = 'Test Name';
console.log(Config);