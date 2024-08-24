import { lbState } from "../../states/listboxState.js";
import { SidebarButton } from "../sidebarButton/sidebarButtonComponent.js";

export function Sidebar() {

  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";

  // upperdiv
  const sidebarUpperHalf = document.createElement("div");
  sidebarUpperHalf.className = "sidebar-upper-half"
  sidebar.appendChild(sidebarUpperHalf);
  //
  const sidebarBtn1 = SidebarButton("./assets/images/menu.png", {onClick: ()=>{
    lbState.toggleLBVisible();
  }});
  sidebarUpperHalf.appendChild(sidebarBtn1);
  //
  const sidebarBtn2 = SidebarButton("./assets/images/plus.png", {imgHeight:"70%", alpha:"80%"});
  sidebarUpperHalf.appendChild(sidebarBtn2);

  // lowerdiv
  const sidebarLowerHalf = document.createElement("div");
  sidebarLowerHalf.className = "sidebar-lower-half";
  sidebar.appendChild(sidebarLowerHalf);
  //
  const sidebarBtn3 = SidebarButton("./assets/images/info.png", {imgHeight:"100%", alpha:"90%"});
  sidebarLowerHalf.appendChild(sidebarBtn3)
  //
  const sidebarBtn4 = SidebarButton("./assets/images/settings.png", {imgHeight:"70%", alpha:"80%"});
  sidebarLowerHalf.appendChild(sidebarBtn4)

  return sidebar;
}
