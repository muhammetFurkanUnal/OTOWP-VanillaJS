import { newGTState } from "../../../../states/newGroupTagsState.js";


export function AddedTag(tagName) {

  const addedTag = document.createElement("div");
  addedTag.className = "added-tag";
  addedTag.innerText = tagName;

  addedTag.addEventListener("click", () => {
    newGTState.removeTag(tagName);
    addedTag.remove();
  });

  return addedTag;
}

