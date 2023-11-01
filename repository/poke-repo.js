import { pagingService } from "../main.js";

export class ApiPokeRepository {
  urlBase;
  offSet;
  limit;
  constructor() {
    this.urlBase = "https://pokeapi.co/api/v2/pokemon";
  }

  async getAll() {
    this.limit = pagingService.limit;
    this.offSet = pagingService.offSet;
    const url = this.urlBase + `?offset=${this.offSet}&limit=${this.limit}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async getOne(identity) {
    const url = this.urlBase + `/${identity}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
