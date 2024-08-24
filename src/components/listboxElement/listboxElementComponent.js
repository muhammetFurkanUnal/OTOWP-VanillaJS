import { lbState } from "../../states/listboxState.js";

export function ListboxElement (innerText) {

  const listboxElement = document.createElement("div");
  listboxElement.className = "listbox-element";
  listboxElement.innerText = innerText;

  listboxElement.addEventListener("click", ()=>{
    let isInNow = listboxElement.classList.toggle("listbox-element-selected");
    isInNow ? lbState.selectLBElement(listboxElement) : lbState.deselectLBElement(listboxElement);
  });

  return listboxElement;
}
