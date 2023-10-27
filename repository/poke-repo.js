export class ApiPokeRepository {
  urlBase;
  constructor(urlBase) {
    this.urlBase = urlBase;
  }
  async getAll() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    return data;
  }
}
