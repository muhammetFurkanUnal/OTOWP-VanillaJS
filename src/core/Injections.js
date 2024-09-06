export class Injections {

  constructor() {

    this.images = "./assets/images/";

    this.backend = {
      host : "localhost",
      port : "5000",
    }

    this.endpoints = {
      groups : "groups",
      tags: "tags",
      sendMessage: "send-message"
    }

    this.API = {
      base : `http://${this.backend.host}:${this.backend.port}/`,
    }

    this.generateURL = {
      getGroupsAll : () => this.API.base + this.endpoints.groups,
      getTagsAll : () => this.API.base + this.endpoints.tags,
      postMessage : () => this.API.base + this.endpoints.sendMessage,
    }

  }

}