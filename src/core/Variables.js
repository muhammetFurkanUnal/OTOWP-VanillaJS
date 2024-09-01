export class Variables {

  constructor() {

    this.backend = {
      host : "localhost",
      port : "5000",
    }

    this.endpoints = {
      groups : "groups",
      tags: "tags",
    }

    this.API = {
      base : `http://${this.backend.host}:${this.backend.port}/`,
    }

    this.generateURL = {
      getUsersAll : () => (this.API.base + this.endpoints.groups),
    }

  }

}