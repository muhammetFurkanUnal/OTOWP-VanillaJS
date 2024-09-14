import { Injections } from "../core/Injections.js";
import { DeleteGroupsDTO } from "../dtos/deleteGroupsDTO.js";
import { Group } from "../models/groupModel.js";
import { lbState } from "../states/listboxState.js";


export class GroupsService {

  constructor () {
    this.injections = new Injections();
    this.selectedGroups = new Set();
    lbState.subscribe(({selectedNodes}) => {
      this.selectedGroups = selectedNodes;
    });
    
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

  addNewGroup (groupDTO) {
    return fetch(this.injections.generateURL.addGroup(), {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(groupDTO)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error when adding new group, response: " + response.text());
      }
      return response.text();
    });
  }

  deleteGroups() {
    const groupIDs = [];
    this.selectedGroups.forEach((group) => {
      groupIDs.push(group.group.id);
    });
    
    const groupsDTO = new DeleteGroupsDTO(groupIDs);

    return fetch(this.injections.generateURL.deleteGroups(), {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(groupsDTO)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error when deleting groups, response: " + response.text())
      }
      return response.text();
    });
  }

}

