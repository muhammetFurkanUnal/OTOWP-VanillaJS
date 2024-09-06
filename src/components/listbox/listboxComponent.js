import { lbState } from "../../states/listboxState.js";
import { ListboxElement } from "../listboxElement/listboxElementComponent.js";
import { GroupsService } from "../../services/groupsService.js";
import { TagsService } from "../../services/tagsService.js";
import { UncheckBtn } from "../uncheckBtn/uncheckBtnComponent.js";

export function Listbox () {

  // constants
  const groupsService = new GroupsService();
  const tagsService = new TagsService();
  let groupsLoaded = false;
  let groups = [];
  let _selectedNodes = new Set();

  // bind selectedNodes to global state of them in lisbox comp
  lbState.subscribe(({ selectedNodes}) => {
    _selectedNodes = selectedNodes;
  });
  

  // create listbox frame
  const listbox = document.createElement("div");
  listbox.className = "listbox";


  // SELECTBOX
  // div for selectbox
  const selectBoxDiv = document.createElement("div");
  selectBoxDiv.className = "selectbox-div";
  listbox.appendChild(selectBoxDiv);
  //
  // selectbox for selecting group tags
  const selectbox = document.createElement("select");
  selectbox.className = "selectbox";
  selectbox.addEventListener("change", (event) => {
    const selected = event.target.options[event.target.selectedIndex].innerText;
    listbox.childNodes.forEach((node) => {
      if (typeof node.group !== "undefined") {
        node.group.tags.forEach((tag) => {
          if (tag.name === selected) {
            node.classList.add("listbox-element-selected");
            lbState.selectLBElement(node);
          }
        });
      }
    });
  });
  selectBoxDiv.appendChild(selectbox);
  //
  // add default selected option to selectbox
  const defOption = document.createElement("option");
  defOption.text = "- Etiket seçin -";
  defOption.selected = true;
  defOption.disabled = true;
  selectbox.appendChild(defOption);


  // SERVICE OPERATIONS
  // get tags data from service layer
  tagsService.getTags().then((tags) => {
    tags.forEach((tag) => {
      const option = document.createElement("option");
      option.text = tag.name;
      selectbox.appendChild(option);
    });
  });
  //
  // get groups data from service layer
  groupsService.getGroups().then((data) => {
    groups = data;
    groupsLoaded = true;
  })
  .then(() => {
    groups.forEach((group) => {
      listbox.appendChild(ListboxElement(group));
    });
  });


  // visibility controller
  lbState.subscribe(({isVisible}) => {
    if (isVisible) 
      listbox.style.display = "flex";
    else 
      listbox.style.display = "none";
  });


  // uncheck button
  listbox.appendChild(UncheckBtn());


  return listbox;
}
