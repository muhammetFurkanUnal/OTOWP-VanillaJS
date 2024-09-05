import { Injections } from "../core/Injections.js";
import { Group } from "../models/groupModel.js";

export class GroupsService {

  constructor () {
    this.injections = new Injections();
  }

  getGroups () {
    return fetch(this.injections.generateURL.getGroupsAll())
    .then((response) => {
      if (!response.ok) 
        console.error("response not ok when fetching groups");
      
      return response.json();
    })
    .then((data) => {
      return data.map((group) => new Group(group.id, group.name, group.tags))
    });
  }
}

