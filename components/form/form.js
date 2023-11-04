// import { list } from "../../main.js";
import { pagingService, stateService } from "../../main.js";
import { Component } from "../component.js";
export class Form extends Component {
  repo;
  errorMessage;
  constructor(selector) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    this.errorMessage = document.querySelector(".error");
  }
  createTemplate() {
    return `<form class="form">
    <input class="form-input" type="text" placeholder="Insert name or ID"></input>
    <button class="form-button" type="submit">Search</button>
    <p class="error hidden">.</p>
      </form>`;
  }
  async handleForm(event) {
    pagingService.offSet = 0;
    event.preventDefault();
    stateService.pageOneTypePokemons = [];
    const input = document.querySelector("input");
    const type = stateService.types.find((type) => type.name === input.value);

    if (type) {
      await stateService.setOneTypePokemons(type.name);
      return;
    }
    if (input.value === "all") {
      await stateService.setPagePokemons();
      return;
    }
    if (input.value) {
      await stateService.setActualPokemon(input.value);
      return;
    }
    if (!input.value) {
      this.errorMessage.textContent = `Submit empty, if want to see all insert "all"`;
      this.errorMessage.classList.remove("hidden");
      setTimeout(() => this.errorMessage.classList.add("hidden"), 3000);
      return;
    }
  }
}
