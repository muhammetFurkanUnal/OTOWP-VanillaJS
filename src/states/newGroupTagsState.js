import { Observable } from "../core/Observable.js";

class newGroupTagsState extends Observable {

  constructor (state) {super(state);}

  addNewTag(tagName) {
    this.state.tags.add(tagName);
    this.notify();
  }

  removeTag(tagName) {
    this.state.tags.delete(tagName);
    this.notify();
  }

  isAdded(tagName) {
    return this.state.tags.has(tagName);
  }

}

export const newGTState =  new newGroupTagsState({
  tags:new Set(),
});
