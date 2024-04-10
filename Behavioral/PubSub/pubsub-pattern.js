class PubSub {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers = [...this.subscribers, subscriber];
  }

  unSubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(
      _subscriber => _subscriber !== subscriber
    );
  }

  publish(payload) {
    this.subscribers.forEach(
      subscriber => subscriber(payload)
    );
  }
}

const pubSubInstance = new PubSub();

const showMessage = message => console.log(message);

pubSubInstance.subscribe(
  payload => showMessage(payload.message)
);

pubSubInstance.publish({
  message: 'Hello!!'
})