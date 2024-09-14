import { Injections } from "../../../core/Injections.js";
import { GroupsService } from "../../../services/groupsService.js";

export function DeleteGroup() {

  const injections = new Injections();
  const groupsService = new GroupsService();


  // main div
  const deleteGroupDivFrame = document.createElement("div");
  deleteGroupDivFrame.className = "delete-group-div-frame";
  //
  // title
  const deleteTitle = document.createElement("span");
  deleteTitle.className = "delete-title";
  deleteGroupDivFrame.appendChild(deleteTitle);
  deleteTitle.innerText = "Var olan bir grubu silin";
  //
  // rest of the elements div
  const deleteGroupDiv = document.createElement("div");
  deleteGroupDiv.className = "delete-group-div";
  deleteGroupDivFrame.appendChild(deleteGroupDiv);
  //
  // text
  const deleteText = document.createElement("span");
  deleteText.innerText = "Yandan seçili olan tüm grupları silin";
  deleteText.className = "delete-text";
  deleteGroupDiv.appendChild(deleteText);
  //
  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "send-btn";
  deleteBtn.id = "delete-btn";
  deleteBtn.addEventListener("click", () => {
    groupsService.deleteGroups()
    .then((data) => {
      console.log(data);
      location.reload(true);
      alert("Seçilen gruplar başarıyla  silindi ");
    })
    .catch(() => {
      console.log(data);
      alert("Grupların silinmesi başarısız oldu");
    });
  });
  deleteGroupDiv.appendChild(deleteBtn);
  //
  // btn image
  const deleteBtnImg = document.createElement("img");
  deleteBtnImg.src = injections.images + "delete.png";
  deleteBtnImg.style.height = "50%";
  deleteBtn.appendChild(deleteBtnImg);




  


  return deleteGroupDivFrame;
}
