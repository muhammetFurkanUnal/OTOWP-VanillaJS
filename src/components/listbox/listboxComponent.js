import { ListboxElement } from "../listboxElement/listboxElementComponent.js";

export function Listbox () {
  
  // create listbox frame
  const listbox = document.createElement("div");
  listbox.className = "listbox";

  // div for selectbox
  const selectBoxDiv = document.createElement("div");
  selectBoxDiv.className = "selectbox-div";
  listbox.appendChild(selectBoxDiv);

  // selectbox for selecting group categories
  const selectbox = document.createElement("select");
  selectbox.className = "selectbox";
  for (let i of [...Array(5)]) {
    const opt = document.createElement("option");
    opt.innerText = "naber";
    selectbox.appendChild(opt);
  }
  selectBoxDiv.appendChild(selectbox);

  // add sample data
  for (let i of [...Array(50)]) {
    listbox.appendChild(ListboxElement("Tübitak Bilgem Yazılım"));
  }

  return listbox;
}
