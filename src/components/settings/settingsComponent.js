import { rightContentState } from "../../states/rightContentState.js";
import { displays } from "../../states/rightContentState.js";

export function SettingsComponent() {

  const settingsComponent = document.createElement("div");
  settingsComponent.className = "settings";

  // upperdiv for close button
  const upperDiv = document.createElement("div");
  upperDiv.className = "settings-upper-div";
  settingsComponent.appendChild(upperDiv);
  //
  const closeBtn = document.createElement("button");
  closeBtn.innerText = "x";
  closeBtn.className = "close-btn";
  closeBtn.addEventListener("click", () => {
    rightContentState.setDisplay(displays.rightContent);
  });
  upperDiv.appendChild(closeBtn);
  

  // toggle display
  rightContentState.subscribe(({chosenDisplay}) => {
    if (chosenDisplay !== displays.settings) 
      settingsComponent.style.display = "none";
    else 
      settingsComponent.style.display = "flex";
  })

  return settingsComponent;

}