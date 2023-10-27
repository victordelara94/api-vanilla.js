import { ApiPokeRepository } from "../../repository/poke-repo.js";
import { Card } from "../card/card.js";
import { Component } from "../component.js";

export class List extends Component {
  pokemons;
  repo;
  url;
  constructor(selector) {
    super(selector);
    this.url = "https://pokeapi.co/api/v2/pokemon";
    this.repo = new ApiPokeRepository(this.url);
    this.template = this.createTemplate();
    this.render();
    this.pokemons = this.createCards();
  }

  createTemplate() {
    return `<ul class="list"></ul>`;
  }

  async createCards() {
    const firstResponse = await this.repo.getAll();
    this.pokemons = firstResponse.results;
    this.pokemons.forEach(async (pokemon) => {
      const secondRepo = new ApiPokeRepository(pokemon.url);
      const secondResponse = await secondRepo.getAll();
      pokemon.image = secondResponse.sprites.other.dream_world.front_default;
      console.log(pokemon);
      new Card(".list", pokemon);
    });
  }
}
