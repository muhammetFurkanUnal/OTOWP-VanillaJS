import { MessageBoxComponent } from "../messageBox/messageBoxComponent.js";
import { MessagePlaceholder } from "../messagePlaceHolder/messagePlaceHolder.js";
import { isAnyLBESelected, subscribeLBE } from "../../states/listboxState.js";

export function MessageContentComponent () {

  // store right half contents in this div
  const messageContentComponent = document.createElement("div");
  messageContentComponent.className = "message-content-component";
  //
  // add right half contents
  const messagePlaceholder = MessagePlaceholder();
  messageContentComponent.appendChild(messagePlaceholder);
  //
  // add actual message sending UI 
  const messageBox = MessageBoxComponent();
  messageContentComponent.appendChild(messageBox);


  // if any chat selected, display message UI 
  subscribeLBE(()=>{
    if (isAnyLBESelected()) {
      messagePlaceholder.style.display = "none";
      messageBox.style.display = "flex";
    }
    else {
      messagePlaceholder.style.display = "flex";
      messageBox.style.display = "none";
    }
  });
  

  return messageContentComponent;
}
