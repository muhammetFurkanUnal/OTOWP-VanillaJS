import { Tag } from "./tagModel.js";

export class Group {

  constructor(id, name, tags) {
    this.id = id
    this.name = name;
    this.tags = []
    for (let i of tags) {
      this.tags.push(new Tag(i.id, i.name));
    }
  }

}
