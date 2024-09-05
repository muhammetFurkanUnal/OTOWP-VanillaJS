import { Injections } from "../core/Injections.js";
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

}