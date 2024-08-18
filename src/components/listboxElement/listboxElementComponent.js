export function ListboxElement (innerText) {

  const listboxElement = document.createElement("div");
  listboxElement.className = "listbox-element";
  listboxElement.innerText = innerText;

  listboxElement.addEventListener("click", ()=>{
    listboxElement.classList.toggle("listbox-element-selected");
  })

  return listboxElement;
}
