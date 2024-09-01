import { lbState } from "../../states/listboxState.js";
import { ListboxElement } from "../listboxElement/listboxElementComponent.js";
import { Variables } from "../../core/variables.js";

export function Listbox () {


  // constants
  const variables = new Variables();
  

  // create listbox frame
  const listbox = document.createElement("div");
  listbox.className = "listbox";


  // div for selectbox
  const selectBoxDiv = document.createElement("div");
  selectBoxDiv.className = "selectbox-div";
  listbox.appendChild(selectBoxDiv);


  // selectbox for selecting group tags
  const selectbox = document.createElement("select");
  selectbox.className = "selectbox";
  for (let i of [...Array(5)]) {
    const opt = document.createElement("option");
    opt.innerText = "naber";
    selectbox.appendChild(opt);
  }
  selectBoxDiv.appendChild(selectbox);


  // send http request to get group names
  // TODO: move this process to service layer
  fetch(variables.generateURL.getUsersAll())
  .then((response)=>{
    if (!response.ok) {
      console.error("response not ok when fetching groups");
    }

    return response.json();
  })
  .then((data) => {
    data.forEach(group => {
      listbox.appendChild(ListboxElement(group.name));
    });
  })


  // visibility controller
  lbState.subscribe(({isVisible}) => {
    if (isVisible) 
      listbox.style.display = "flex";
    else 
      listbox.style.display = "none";
  });


  return listbox;
}
