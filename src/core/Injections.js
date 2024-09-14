export class Injections {

  constructor() {

    this.images = "./assets/images/";

    this.backend = {
      host : "localhost",
      port : "5000",
    }

    this.endpoints = {
      groups : {
        get: "groups",
        add: "groups/add",
        delete: "groups/delete",
      },
      tags: {
        get: "tags",
        add: "tags/add",
        delete: "tags/delete",
      },

      sendMessage: "send-message",
      addNewGroup: "add",
      deleteGroups: "delete"
    }

    this.API = {
      base : `http://${this.backend.host}:${this.backend.port}/`,
    }

    this.generateURL = {
      getGroupsAll : () => this.API.base + this.endpoints.groups.get,
      getTagsAll : () => this.API.base + this.endpoints.tags.get,
      postMessage : () => this.API.base + this.endpoints.sendMessage,
      addGroup : () => this.API.base + this.endpoints.groups.add,
      deleteGroups: () => this.API.base + this.endpoints.groups.delete,
      addTag: () => this.API.base + this.endpoints.tags.add,
      deleteTag: () => this.API.base + this.endpoints.tags.delete,
    }

  }

}