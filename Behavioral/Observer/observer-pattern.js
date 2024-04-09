/**
 * The observer pattern lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they are observing. Basically, it's like having an event listener on a given object, and when that object perfoms the action we're listening for, we do something.
 * 
 * Simple example is useEffect hook in React
 * 
 * Below is the JavaScript implementation for the observer pattern.
 */

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(_fn => _fn != fn);
  }

  fire() {
    this.observers.forEach(fn => fn.call());
  }
}

const subject = new Subject();

function Observer1() {
  console.log('Observer 1 fired');
}

function Observer2() {
  console.log('Observer 2 fired');
}


subject.subscribe(Observer1);
subject.subscribe(Observer2);

subject.fire();

subject.unsubscribe(Observer2);
subject.fire();
