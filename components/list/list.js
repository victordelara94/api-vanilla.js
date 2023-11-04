import { stateService } from "../../main.js";
import { Card } from "../card/card.js";
import { Component } from "../component.js";

export class List extends Component {
  url;
  offSet = 0;
  constructor(selector) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    this.pokemons = [];
    // this.createCards();
  }

  createTemplate() {
    return `<ul class="list"></ul>`;
  }

  async createCards(identity) {
    debugger;
    const ulElement = document.querySelector(".list");
    const listElements = document.querySelectorAll(".pokemon");
    if (listElements) {
      listElements.forEach((element) => ulElement.removeChild(element));
    }
    if (identity) {
      if (Array.isArray(identity)) {
        identity.forEach((pokemon) => {
          new Card(".list", pokemon);
        });
        return;
      }
      // await stateService.setActualPokemon(identity);
      new Card(".list", stateService.actualPokemon);
      return;
    }

    stateService.pagePokemons.forEach((pokemon) => {
      new Card(".list", pokemon);
    });
  }
}
