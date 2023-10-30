import { repo } from "../../main.js";
import { Card } from "../card/card.js";
import { Component } from "../component.js";

export class List extends Component {
  pokemons;
  url;
  offSet = 0;
  constructor(selector) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    this.pokemons = [];
    this.createCards();
  }

  createTemplate() {
    return `<ul class="list"></ul>`;
  }
  async createCards(identity) {
    this.pokemons = [];
    const ulElement = document.querySelector(".list");
    const listElements = document.querySelectorAll(".pokemon");
    if (listElements) {
      listElements.forEach((element) => ulElement.removeChild(element));
    }

    if (identity) {
      this.pokemons = await repo.getOne(identity);
      this.pokemons.image =
        this.pokemons.sprites.other.dream_world.front_default;
      if (this.pokemons.id > 649) {
        this.pokemons.image = this.pokemons.sprites.front_default;
      }
      new Card(".list", this.pokemons);
      return;
    }

    // if (this.offSet < 0) return;
    // // if (this.offSet >= 0) {
    // //   const ulElement = document.querySelector(".list");
    // //   const listElements = document.querySelectorAll(".pokemon");
    // // }

    // // listElements.forEach((element) => ulElement.removeChild(element));

    // if (offSet && limit) {
    // const pokemon = (pokemon.image =
    //   pokemon.sprites.other.dream_world.front_default);
    // this.pokemons.push(pokemon);
    // this.pokemons.sort((a, b) => a.id - b.id);
    // this.pokemons.forEach((pokemon) => {
    //   new Card(".list", pokemon);
    // });
    // return;
    // }
    const firstResponse = await repo.getAll();
    this.pokemons = firstResponse.results;

    await Promise.all(
      this.pokemons.map(async (pokemon) => {
        const secondResponse = await repo.getOne(pokemon.name);
        pokemon.image = secondResponse.sprites.other.dream_world.front_default;
        pokemon.id = secondResponse.id;
        // this.pokemons.push(pokemon);
      })
    );
    this.pokemons.sort((a, b) => a.id - b.id);
    this.pokemons.forEach((pokemon) => {
      new Card(".list", pokemon);
    });
  }
}
