import { Injections } from "../../core/Injections.js";
import { lbState } from "../../states/listboxState.js";

export function UncheckBtn() {

  // constants
  const injections = new Injections();
  let _selectedNodes = [];

  const uncheck = document.createElement("div");
  uncheck.className = "uncheck";

  const img = document.createElement("img");
  img.className = "uncheck_img";
  img.src = injections.images + "delete.png";
  uncheck.appendChild(img);


  // only visible if at least one group selected
  lbState.subscribe(({selectedNodes}) => {
    if (selectedNodes.length > 0) {
      // uncheck.style.display = "flex";
      uncheck.style.opacity = 1;
    } 
    else {
      // uncheck.style.display = "none";
      uncheck.style.opacity = 0;
    }
  });


  // listen selectedNodes
  lbState.subscribe(({selectedNodes}) => {
    _selectedNodes = selectedNodes;
  })


  // add functionality, uncheck all selected groups
  uncheck.addEventListener("click", () => {
    _selectedNodes.forEach((node) => {
      node.classList.toggle("listbox-element-selected");
    });    
    lbState.deselectAll();
  });

  return uncheck;
}
