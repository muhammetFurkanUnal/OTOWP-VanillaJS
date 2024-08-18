import { Listbox } from "../../listbox/listboxComponent.js";
import { Sidebar } from "../../sidebar/sidebarComponent.js";
import { MessageContentComponent } from "../../messageContent/messageContentComponent.js";

export function mainPage () {

  // create mainpage
  const mainPage = document.createElement("div");
  mainPage.className = "mainpage";

  // place left half div
  const mainPageLeftHalf = document.createElement("div");
  mainPageLeftHalf.className = "mainpage-left-half";
  mainPage.appendChild(mainPageLeftHalf)
  //
  // create and place sidebar into left half
  const sidebar = Sidebar();
  mainPageLeftHalf.appendChild(sidebar);
  //
  // create and place listbox into left half
  const listbox = Listbox();
  mainPageLeftHalf.appendChild(listbox);


  // place right half div
  const mainPageRightHalf = document.createElement("div");
  mainPageRightHalf.className = "mainpage-right-half";
  mainPage.appendChild(mainPageRightHalf);
  // 
  // fill right half
  mainPageRightHalf.appendChild(MessageContentComponent());
  


  return mainPage;
}




