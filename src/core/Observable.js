
export class Observable {

  constructor (state={}) {
    this.state = state;
    this.observers = [];
  }

  subscribe (observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify () {
    this.observers.forEach(observer => {
      observer(this.state);
    });
  }
}
