import { lbState } from "../../../states/listboxState.js";

export function ListboxElement (group) {

  const listboxElement = document.createElement("div");
  listboxElement.className = "listbox-element";
  listboxElement.innerText = group.name;
  listboxElement.group = group;

  // select or deselect lb element.
  //
  // select or deselect process divides into two:
  // 1- toggle class name
  // 2- remove deselected node from selectedNodes array from lbState.js
  // selectedNodes is a global variable that holds selected groups
  // so makes datas about which groups are selected visible to public
  //
  // whenever selecting or deselecting needed, dont forget these two process.
  listboxElement.addEventListener("click", ()=>{
    let isSelected = listboxElement.classList.toggle("listbox-element-selected");
    isSelected ? lbState.selectLBElement(listboxElement) : lbState.deselectLBElement(listboxElement);
  });

  return listboxElement;
}
