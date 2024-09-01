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


// use this constants object when a new display needs to be created 
export const displays = {
  rightContent : "rightContent",
  edit : "edit",
  settings : "settings",
}
