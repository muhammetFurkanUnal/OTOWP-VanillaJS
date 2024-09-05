import { Injections } from "../../core/Injections.js";
import { lbState } from "../../states/listboxState.js";
import { displays, rightContentState } from "../../states/rightContentState.js";
import { SidebarButton } from "../sidebarButton/sidebarButtonComponent.js";

// toggling selected sidebar button
let chosenBtn = document.createElement("button");
function chooseBtn(btn) {
  // unchoose current selected button
  chosenBtn.classList.toggle("sidebar-btn-chosen");
  // select new button
  chosenBtn = btn;
  chosenBtn.classList.toggle("sidebar-btn-chosen");
}

export function Sidebar() {
  const sidebar = document.createElement("div");
  const injections = new Injections();
  sidebar.className = "sidebar";

  // upperdiv
  const sidebarUpperHalf = document.createElement("div");
  sidebarUpperHalf.className = "sidebar-upper-half";
  sidebar.appendChild(sidebarUpperHalf);
  //
  const menuBtn = SidebarButton(injections.images + "menu.png", {
    onClick: () => {
      lbState.toggleLBVisible();
    },
  });
  sidebarUpperHalf.appendChild(menuBtn);
  //
  const editBtn = SidebarButton(injections.images + "plus.png", {
    imgHeight: "70%",
    alpha: "80%",
    onClick: () => {
      rightContentState.setDisplay(displays.edit);
    },
  });
  sidebarUpperHalf.appendChild(editBtn);

  // lowerdiv
  const sidebarLowerHalf = document.createElement("div");
  sidebarLowerHalf.className = "sidebar-lower-half";
  sidebar.appendChild(sidebarLowerHalf);
  //
  const infoBtn = SidebarButton(injections.images + "info.png", {
    imgHeight: "100%",
    alpha: "90%",
  });
  sidebarLowerHalf.appendChild(infoBtn);
  //
  const settingsBtn = SidebarButton(injections.images + "settings.png", {
    imgHeight: "70%",
    alpha: "80%",
    onClick: () => {
      rightContentState.setDisplay(displays.settings);
    },
  });
  sidebarLowerHalf.appendChild(settingsBtn);

  // use chooseBtn
  rightContentState.subscribe(({ chosenDisplay }) => {
    if (chosenDisplay === displays.edit) chooseBtn(editBtn);
    else if (chosenDisplay === displays.settings) chooseBtn(settingsBtn);
    else chooseBtn(document.createElement("button"));
  });

  return sidebar;
}
