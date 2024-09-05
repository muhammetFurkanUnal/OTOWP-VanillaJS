import { lbState } from "../../states/listboxState.js";

export function ListboxElement (group) {

  const listboxElement = document.createElement("div");
  listboxElement.className = "listbox-element";
  listboxElement.innerText = group.name;

  listboxElement.addEventListener("click", ()=>{
    let isSelected = listboxElement.classList.toggle("listbox-element-selected");
    isSelected ? lbState.selectLBElement(listboxElement, group) : lbState.deselectLBElement(listboxElement, group);
  });

  return listboxElement;
}
