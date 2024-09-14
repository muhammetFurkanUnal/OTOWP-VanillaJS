import { Injections } from "../../../core/Injections.js";
import { TagsService } from "../../../services/tagsService.js";
import { TagsSelect } from "../../listbox/tagsSelect/tagsSelectComponent.js";

export function DeleteTag() {

  // constants
  const injections = new Injections();
  const tagsService = new TagsService();
  let selectedTag;

  // main div
  const deleteTagDivFrame = document.createElement("div");
  deleteTagDivFrame.className = "delete-tag-div-frame";
  //
  // title
  const deleteTagTitle = document.createElement("span");
  deleteTagTitle.className = "delete-tag-title";
  deleteTagDivFrame.appendChild(deleteTagTitle);
  deleteTagTitle.innerText = "Bir etiket silin";
  //
  // rest of the elements div
  const deleteTagDiv = document.createElement("div");
  deleteTagDiv.className = "delete-tag-div";
  deleteTagDivFrame.appendChild(deleteTagDiv);
  //
  // text
  const deleteText = document.createElement("span");
  deleteText.innerText = "Seçili olan etiketi silin";
  deleteText.className = "delete-tag-text";
  deleteTagDiv.appendChild(deleteText);
  //
  // selectbox
  const selectbox = TagsSelect({callback:(event)=>{
    selectedTag = event.target.options[event.target.selectedIndex].tag;
  }});
  // id is for specific style settings, in .css
  selectbox.id = "add-selectbox";
  deleteTagDiv.appendChild(selectbox);
  //
  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "send-btn";
  deleteBtn.id = "delete-tag-btn";
  deleteBtn.addEventListener("click", () => {
    tagsService.deleteTag(selectedTag)
    .then((data) => {
      console.log(data);
      location.reload(true);
      alert("Etiket başarıyla silindi");
    })
    .catch((data) => {
      console.log(data);
      alert("Etiket silme başarısız oldu");
    })
    
  });
  deleteTagDiv.appendChild(deleteBtn);
  //
  // btn image
  const deleteBtnImg = document.createElement("img");
  deleteBtnImg.src = injections.images + "delete.png";
  deleteBtnImg.style.height = "50%";
  deleteBtn.appendChild(deleteBtnImg);
  


  return deleteTagDivFrame;
}
