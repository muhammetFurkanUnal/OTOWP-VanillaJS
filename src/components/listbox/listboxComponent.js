import { lbState } from "../../states/listboxState.js";
import { ListboxElement } from "./listboxElement/listboxElementComponent.js";
import { GroupsService } from "../../services/groupsService.js";
import { TagsService } from "../../services/tagsService.js";
import { UncheckBtn } from "../uncheckBtn/uncheckBtnComponent.js";
import { TagsSelect } from "./tagsSelect/tagsSelectComponent.js";

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

  // selectbox
  const selecbox = TagsSelect({callback:(event) => {
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
  }});
  listbox.appendChild(selecbox);


  // SERVICE OPERATIONS
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
