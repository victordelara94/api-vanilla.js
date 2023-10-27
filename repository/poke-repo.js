export class ApiPokeRepository {
  urlBase;
  constructor(urlBase) {
    this.urlBase = urlBase;
  }
  async getAll() {
    const response = await fetch(this.urlBase);
    const data = await response.json();
    return data;
  }
}
