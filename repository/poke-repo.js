import { pagingService } from "../main.js";

export class ApiPokeRepository {
  urlBase;

  constructor() {
    this.urlBase = "https://pokeapi.co/api/v2";
  }

  async getAll() {
    const url =
      this.urlBase +
      `/pokemon?offset=${pagingService.offSet}&limit=${pagingService.limit}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async getOne(identity) {
    const url = this.urlBase + `/pokemon/${identity}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async getTypes() {
    const url = this.urlBase + `/type`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }
  async getByType(type) {
    const url = this.urlBase + `/type/${type}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
