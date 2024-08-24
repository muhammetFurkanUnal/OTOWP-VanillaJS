import { Observable } from "../core/Observable.js";

class ListboxState extends Observable {

  constructor (state) {super(state);}

  toggleLBVisible() {
    this.state.isVisible = !this.state.isVisible;
    this.notify();
  }

  selectLBElement (node) {
    this.state.selectedNodes.push(node);
    this.notify();
  }

  deselectLBElement (node) {
    for (let i in this.state.selectedNodes) {
      if (this.state.selectedNodes[i] === node) {
        this.state.selectedNodes.splice(i, 1);
      }
    }
    this.notify();
  }

}

export const lbState = new ListboxState({
  selectedNodes : [],
  isVisible : true, 
});
