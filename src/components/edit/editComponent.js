import { rightContentState } from "../../states/rightContentState.js";

export function EditComponent() {

  const editComponent = document.createElement("div");
  editComponent.className = "edit";

  // upperdiv for close button
  const upperDiv = document.createElement("div");
  upperDiv.className = "edit-upper-div";
  editComponent.appendChild(upperDiv);
  //
  const closeBtn = document.createElement("button");
  closeBtn.innerText = "x";
  closeBtn.className = "close-btn";
  closeBtn.addEventListener("click", () => {
    rightContentState.setDisplay("rightContent");
  });
  upperDiv.appendChild(closeBtn);

  // toggle display
  rightContentState.subscribe(({chosenDisplay}) => {
    if (chosenDisplay !== "edit") 
      editComponent.style.display = "none";
    else 
      editComponent.style.display = "flex";
  })

  return editComponent;

}
