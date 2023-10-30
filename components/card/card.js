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
    <span>${this.pokemon.name}</span>
      <a href="https://www.pokemon.com/es/pokedex/${this.pokemon.name}" target="_blank"><img src=${this.pokemon.image} alt=${this.pokemon.image} width=200 height=200/></a>
    </li>`;
  }
}
