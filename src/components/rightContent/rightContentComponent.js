import { MessageBoxComponent } from "../messageBox/messageBoxComponent.js";
import { MessagePlaceholder } from "../messagePlaceHolder/messagePlaceHolder.js";
import { lbState } from "../../states/listboxState.js";
import { displays, rightContentState } from "../../states/rightContentState.js";

export function RightContentComponent () {

  // store right half contents in this div
  const rightContentComponent = document.createElement("div");
  rightContentComponent.className = "right-content-component";
  //
  // add right half contents
  const messagePlaceholder = MessagePlaceholder();
  rightContentComponent.appendChild(messagePlaceholder);
  //
  // add actual message sending UI 
  const messageBox = MessageBoxComponent();
  rightContentComponent.appendChild(messageBox);


  // if edit button selected, hide this rightContentComponent
  rightContentState.subscribe(({chosenDisplay}) => {
    if (chosenDisplay !== displays.rightContent) 
      rightContentComponent.style.display = "none";
    else
      rightContentComponent.style.display = "flex";
  });


  // if any group selected, display message UI 
  lbState.subscribe(({selectedNodes})=>{
    const isAnyLBESelected = selectedNodes.length === 0 ? false : true;
    if (isAnyLBESelected) {
      messagePlaceholder.style.display = "none";
      messageBox.style.display = "flex";
    }
    else {
      messagePlaceholder.style.display = "flex";
      messageBox.style.display = "none";
    }
  });
  

  return rightContentComponent;
}
