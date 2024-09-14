import { Injections } from "../../../core/Injections.js";
import { TagsService } from "../../../services/tagsService.js";

export function AddNewTag() {

  // constants
  const injections = new Injections();
  const tagsService = new TagsService();

  // main div
  const addNewTagDivFrame = document.createElement("div");
  addNewTagDivFrame.className = "add-new-tag-div-frame";
  //
  // title
  const newTagTitle = document.createElement("span");
  newTagTitle.className = "new-tag-title";
  addNewTagDivFrame.appendChild(newTagTitle);
  newTagTitle.innerText = "Yeni bir etiket ekleyin";
  //
  // rest of the elements div
  const addNewTagDiv = document.createElement("div");
  addNewTagDiv.className = "add-new-tag-div";
  addNewTagDivFrame.appendChild(addNewTagDiv);
  //
  // input area
  const tagNameInput = document.createElement("input");
  tagNameInput.className = "tag-name-input";
  tagNameInput.placeholder = "Etiket Adı";
  addNewTagDiv.appendChild(tagNameInput);
  //
  // add btn
  const addBtn = document.createElement("button");
  addBtn.className = "send-btn";
  addBtn.id = "add-tag-btn";
  addBtn.addEventListener("click", () => {
    const tagName = tagNameInput.value;
    tagsService.addNewTag(tagName)
    .then((data) => {
      console.log(data);
      location.reload(true);
      alert("Yeni etiket başarıyla eklendi ");
    })
    .catch((data) => {
      console.log(data);
      alert("Etiket ekleme başarısız oldu ");
    });
  });
  addNewTagDiv.appendChild(addBtn);
  //
  // add btn img
  const addBtnImg = document.createElement("img");
  addBtnImg.src = injections.images + "send.png";
  addBtnImg.style.height = "100%";
  addBtn.appendChild(addBtnImg);


  return addNewTagDivFrame;
}
