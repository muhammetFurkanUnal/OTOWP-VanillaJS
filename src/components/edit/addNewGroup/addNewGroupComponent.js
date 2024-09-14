import { Injections } from "../../../core/Injections.js";
import { newGTState } from "../../../states/newGroupTagsState.js";
import { TagsSelect } from "../../listbox/tagsSelect/tagsSelectComponent.js";
import { AddedTag } from "./addedTag/addedTag.js";
import { newGroupDTO } from "../../../dtos/newGroupDTO.js";
import { GroupsService } from "../../../services/groupsService.js";

export function AddNewGroup() {

  // constants
  const injections = new Injections();
  let newGTTags = new Set();
  newGTState.subscribe(({tags}) => {
      newGTTags = tags;
  });
  const groupsService = new GroupsService();

  // main div
  const addNewGroupDivFrame = document.createElement("div");
  addNewGroupDivFrame.className = "add-new-group-div-frame";
  //
  // title
  const addTitle = document.createElement("span");
  addTitle.className = "add-title";
  addNewGroupDivFrame.appendChild(addTitle);
  addTitle.innerText = "Yeni bir grup ekleyin";
  //
  // rest of the elements div
  const addNewGroupDiv = document.createElement("div");
  addNewGroupDiv.className = "add-new-group-div";
  addNewGroupDivFrame.appendChild(addNewGroupDiv);
  //
  // input and selectbox div, parameters
  const paramsDiv = document.createElement("div");
  paramsDiv.className = "params-div";
  addNewGroupDiv.appendChild(paramsDiv);
  //
  // selected tags div
  const tagsDiv = document.createElement("div");
  tagsDiv.className = "tags-div";
  newGTState.subscribe(({tags}) => {
    if (tags.size > 0) {
      tagsDiv.style.display = "flex";
    }
    else if (tags.size === 0) {
      tagsDiv.style.display = "none";
    }
  });
  addNewGroupDiv.appendChild(tagsDiv);
  //
  // title
  const tagsDivText = document.createElement("span");
  tagsDivText.className = "tags-div-text";
  tagsDivText.innerText = "Seçilen etiketler: ";
  tagsDiv.appendChild(tagsDivText);
  //
  // input area
  const groupNameInput = document.createElement("input");
  groupNameInput.className = "group-name-input";
  groupNameInput.placeholder = "Grup Adı";
  paramsDiv.appendChild(groupNameInput);
  //
  // selectbox
  const selectbox = TagsSelect({callback:(event)=>{
    const selected = event.target.options[event.target.selectedIndex].innerText;
    if (!newGTState.isAdded(selected)) {
      tagsDiv.appendChild(AddedTag(selected));
      newGTState.addNewTag(selected);
    }
  }});
  // id is for specific style settings, in .css
  selectbox.id = "add-selectbox";
  paramsDiv.appendChild(selectbox);
  //
  // add btn
  const addBtn = document.createElement("button");
  addBtn.className = "send-btn";
  addBtn.id = "add-btn";
  addBtn.addEventListener("click", () => {
    const groupName = groupNameInput.value;
    const dto = new newGroupDTO(groupName, Array.from(newGTTags));
    groupsService.addNewGroup(dto)
    .then((data) => {
      console.log(data);
      location.reload(true);
      alert("Yeni grup başarıyla eklendi ");
    })
    .catch((data) => {
      console.log(data);
      alert("Grup ekleme başarısız oldu ");
    });
  });
  paramsDiv.appendChild(addBtn);
  //
  // add btn img
  const addBtnImg = document.createElement("img");
  addBtnImg.src = injections.images + "send.png";
  addBtnImg.style.height = "100%";
  addBtn.appendChild(addBtnImg);
  


  return addNewGroupDivFrame;
}

