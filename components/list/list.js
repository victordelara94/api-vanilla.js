import { ApiPokeRepository } from "../../repository/poke-repo.js";
import { Buttons } from "../buttons/button.js";
import { Card } from "../card/card.js";
import { Component } from "../component.js";

export class List extends Component {
  pokemons;
  repo;
  url;
  constructor(selector, offSet) {
    super(selector);
    this.url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=20`;
    this.repo = new ApiPokeRepository(this.url);
    this.template = this.createTemplate();
    this.render();
    this.pokemons = [];
    this.createCards();
  }

  createTemplate() {
    return `<ul class="list"></ul>`;
  }

  async createCards() {
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
    const nextPageOffSett = firstResponse.next.slice(
      firstResponse.next.indexOf("=") + 1,
      firstResponse.next.indexOf("&")
    );
    const limit = firstResponse.next.slice(
      firstResponse.next.lastIndexOf("=") + 1
    );

    const offSet = nextPageOffSett - limit;
    const buttons = new Buttons(".list", offSet);
    const nextPage = document.querySelector(".nextButton");
    nextPage.addEventListener("click", (event) => buttons.nextPage(event));
  }
}
