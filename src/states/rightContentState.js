import { Observable } from "../core/Observable.js";

class RightContentState extends Observable {

  constructor (state) {super(state);}

  setDisplay(display) {
    this.state.chosenDisplay = display;
    this.notify();
  }

}

export const rightContentState = new RightContentState({
  chosenDisplay: "",
});
