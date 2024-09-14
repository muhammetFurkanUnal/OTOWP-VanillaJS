import { TagsService } from "../../../services/tagsService.js";

export function TagsSelect({callback=0}) {

  const tagsService = new TagsService();

  // SELECTBOX
  // div for selectbox
  const selectBoxDiv = document.createElement("div");
  selectBoxDiv.className = "selectbox-div";
  //
  // selectbox for selecting group tags
  const selectbox = document.createElement("select");
  selectbox.className = "selectbox";
  selectbox.addEventListener("change", callback);
  selectBoxDiv.appendChild(selectbox);
  //
  // add default selected option to selectbox
  const defOption = document.createElement("option");
  defOption.text = "- Etiket seçin -";
  defOption.selected = true;
  defOption.disabled = true;
  selectbox.appendChild(defOption);

  tagsService.getTags().then((tags) => {
    tags.forEach((tag) => {
      const option = document.createElement("option");
      option.text = tag.name;
      option.tag = tag;
      selectbox.appendChild(option);
    });
  });

  return selectBoxDiv;
}