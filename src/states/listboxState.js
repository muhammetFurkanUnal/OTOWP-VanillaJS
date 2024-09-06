import { Observable } from "../core/Observable.js";

class ListboxState extends Observable {

  constructor (state) {super(state);}

  toggleLBVisible() {
    this.state.isVisible = !this.state.isVisible;
    this.notify();
  }

  selectLBElement (node) {
    this.state.selectedNodes.add(node);
    this.notify();
  }

  deselectLBElement (node) {
    this.state.selectedNodes.delete(node);
    this.notify();
  }

  deselectAll() {
    this.state.selectedNodes = new Set();
    this.notify();
  }

}

export const lbState = new ListboxState({
  selectedNodes : new Set(),
  isVisible : true, 
});
