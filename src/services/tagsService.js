import { Injections } from "../core/Injections.js";
import { NewTagDTO } from "../dtos/newTagDTO.js";
import { DeleteTagDTO } from "../dtos/deleteTagDTO.js";
import { Tag } from "../models/tagModel.js";

export class TagsService {

  constructor() {
    this.injections = new Injections();
  }

  getTags () {
    return fetch(this.injections.generateURL.getTagsAll())
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.map((tag) => new Tag(tag.id, tag.name));
    })
  }

  addNewTag(tagName) {
    const dto = new NewTagDTO(tagName);
    return fetch(this.injections.generateURL.addTag(), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dto)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error when adding new tag, response: " + response.text());
      }

      return response.text();
    });
  }

  deleteTag(tag) {
    const dto = new DeleteTagDTO(tag.id);
    return fetch(this.injections.generateURL.deleteTag(), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dto)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error when adding new tag, response: " + response.text());
      }

      return response.text();
    });
  }

}