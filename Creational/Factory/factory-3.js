class Developer {
  constructor(name) {
    this.name = name;
    this.type = "Developer";
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.type = "Tester";
  }
}

class EmployeeFactory {
  constructor(name, type) {
    this.create = function (name, type) {
      switch (type) {
        case 1:
          return new Developer(name);
          break;
        case 2:
          return new Tester(name);
          break;
      }
    }
  }
}

function say() {
  console.log(`Hi, I am a ${this.name} and I am ${this.type}`);
}

const employeeFactory = new EmployeeFactory();

const employees = [];

employees.push(employeeFactory.create('Raman', 1));
employees.push(employeeFactory.create('Pawan', 2));

employees.forEach(employee => say.call(employee));
