import { Component } from "../component.js";

export class Card extends Component {
  pokemon;
  constructor(selector, pokemon) {
    super(selector);
    this.pokemon = pokemon;
    this.template = this.createTemplate();
    this.render();
  }
  createTemplate() {
    return `<li class="pokemon">
    <span class="pokemon-name">${this.pokemon.name}</span>
      <a class="pokemon-link" href="https://www.pokemon.com/es/pokedex/${this.pokemon.name}" target="_blank"><img class="pokemon-image" src=${this.pokemon.image} alt=${this.pokemon.image} width=200 height=200/></a>
    </li>`;
  }
}
