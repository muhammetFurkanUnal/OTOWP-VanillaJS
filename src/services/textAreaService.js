import { lbState } from "../states/listboxState.js";
import { MessageDTO } from "../dtos/messageDTO.js";
import { Injections } from "../core/Injections.js";

export class TextAreaService {

  constructor () {
    this.injections = new Injections();
    this.selectedGroups = [];
    lbState.subscribe(({selectedGroups}) => {
      this.selectedGroups = selectedGroups;
    })
  }

  sendMessage(message) {
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
