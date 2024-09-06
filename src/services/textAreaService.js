import { lbState } from "../states/listboxState.js";
import { MessageDTO } from "../dtos/messageDTO.js";
import { Injections } from "../core/Injections.js";

export class TextAreaService {

  constructor () {
    this.injections = new Injections();
    lbState.subscribe(({selectedNodes}) => {
      this.selectedNodes = selectedNodes;
    });
  }

  sendMessage(message) {
    this.selectedGroups = new Set();
    for (let i of this.selectedNodes) {
      this.selectedGroups.add(i.group);
    }
    const mDTO = new MessageDTO(message, this.selectedGroups);
    fetch(this.injections.generateURL.postMessage(), {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(mDTO)
    })
    .then((response) => response.text())
    .then((response) => console.log(response));
  }

}
