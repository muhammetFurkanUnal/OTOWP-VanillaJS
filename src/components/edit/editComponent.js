import { rightContentState } from "../../states/rightContentState.js";
import { displays } from "../../states/rightContentState.js";
import { AddNewGroup } from "./addNewGroup/addNewGroupComponent.js";
import { AddNewTag } from "./addNewTag/addNewTagComponent.js";
import { DeleteGroup } from "./deleteGroup/deleteGroupComponent.js";
import { DeleteTag } from "./deleteTag/deleteTagComponent.js";

export function EditComponent() {

  const editComponent = document.createElement("div");
  editComponent.className = "edit";

  // most upper div
  const mostUpperDiv = document.createElement("div");
  mostUpperDiv.className = "edit-most-upper-div";
  editComponent.appendChild(mostUpperDiv);
  //
  // upperdiv for close button
  const upperDiv = document.createElement("div");
  upperDiv.className = "edit-upper-div";
  mostUpperDiv.appendChild(upperDiv);
  //
  const closeBtn = document.createElement("button");
  closeBtn.innerText = "x";
  closeBtn.className = "close-btn-edit";
  closeBtn.addEventListener("click", () => {
    rightContentState.setDisplay(displays.rightContent);
  });
  upperDiv.appendChild(closeBtn);
  //
  // lower div
  const lowerDiv = document.createElement("div");
  lowerDiv.className = "lower-div";
  editComponent.appendChild(lowerDiv);
  //
  // edit text
  const editText = document.createElement("h1");
  editText.className = "edit-text";
  editText.innerText = "Gruplar";
  lowerDiv.appendChild(editText);
  //
  // add actual content
  lowerDiv.appendChild(AddNewGroup());
  lowerDiv.appendChild(DeleteGroup());
  lowerDiv.appendChild(AddNewTag());
  lowerDiv.appendChild(DeleteTag());


  // toggle display
  rightContentState.subscribe(({chosenDisplay}) => {
    if (chosenDisplay !== displays.edit) 
      editComponent.style.display = "none";
    else 
      editComponent.style.display = "flex";
  });


  



  return editComponent;

}
