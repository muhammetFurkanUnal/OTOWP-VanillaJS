import { lbState } from "../states/listboxState.js";

export class TextAreaService {

  constructor () {
    this.selectedGroups = [];
    lbState.subscribe(({selectedGroups}) => {
      this.selectedGroups = selectedGroups;
    })
  }

  sendMessage(message) {
    console.log(message);
  }

}
