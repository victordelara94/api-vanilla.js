import { pagingService } from "../../main.js";
import { ApiPokeRepository } from "../../repository/poke-repo.js";
import { Card } from "../card/card.js";
import { Component } from "../component.js";

export class List extends Component {
  pokemons;
  repo;
  url;
  offSet = 0;
  constructor(selector) {
    super(selector);
    this.url = `https://pokeapi.co/api/v2/pokemon?offset=${this.offSet}&limit=20`;

    this.template = this.createTemplate();
    this.render();
    this.pokemons = [];
    this.createCards();
  }

  createTemplate() {
    return `<ul class="list"></ul>`;
  }
  async createCards(offSet) {
    if (offSet < 0) return;

    this.pokemons = [];
    if (offSet === undefined) {
      this.offSet = offSet;
      this.repo = new ApiPokeRepository(this.url);
    }
    if (typeof offSet === "number") {
      this.url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=20`;
      this.repo = new ApiPokeRepository(this.url);
      const ulElement = document.querySelector(".list");
      const listElements = document.querySelectorAll(".pokemon");
      listElements.forEach((element) => ulElement.removeChild(element));
    }
    const firstResponse = await this.repo.getAll();
    const pokemons = firstResponse.results;

    await Promise.all(
      pokemons.map(async (pokemon) => {
        const secondRepo = new ApiPokeRepository(pokemon.url);
        const secondResponse = await secondRepo.getAll();
        pokemon.image = secondResponse.sprites.other.dream_world.front_default;
        pokemon.id = secondResponse.id;
        this.pokemons.push(pokemon);
      })
    );
    this.pokemons.sort((a, b) => a.id - b.id);
    this.pokemons.forEach((pokemon) => {
      new Card(".list", pokemon);
    });
    pagingService.setOffSetAndLimit(firstResponse);
  }
}
