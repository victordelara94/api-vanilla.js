// import { list } from "../../main.js";
import {
  nextPageElement,
  pagingService,
  previousPageElement,
  stateService,
} from "../../main.js";
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
    <input class="form-input" type="text" placeholder="Insert name, ID or type"></input>
    <button class="form-button" type="submit">Search</button>
    <p class="error hidden"></p>
      </form>`;
  }
  async handleForm(event) {
    pagingService.offSet = 0;
    event.preventDefault();
    stateService.pageOneTypePokemons = [];
    const input = document.querySelector("input");
    const type = stateService.types.find((type) => type.name === input.value);

    if (type) {
      nextPageElement.classList.remove("hidden");
      previousPageElement.classList.add("hidden");
      await stateService.setOneTypePokemons(type.name);
      return;
    }
    if (input.value === "all") {
      nextPageElement.classList.remove("hidden");
      previousPageElement.classList.add("hidden");
      await stateService.setPagePokemons();
      return;
    }
    if (input.value) {
      previousPageElement.classList.add("hidden");
      const nextPageElement = document.querySelector(".next-button");
      nextPageElement.classList.add("hidden");
      await stateService.setActualPokemon(input.value);
      return;
    }
    if (!input.value) {
      this.errorMessage.textContent = `Submit empty, if want to see all insert "all"`;
      setTimeout(() => (this.errorMessage.textContent = ""), 3000);
      return;
    }
  }
}
