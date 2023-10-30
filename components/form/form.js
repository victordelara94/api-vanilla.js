import { list } from "../../main.js";
import { Component } from "../component.js";
export class Form extends Component {
  repo;
  constructor(selector) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }
  createTemplate() {
    return `<form>
    <input type="text" placeholder="Insert name or ID"></input>
    <button type="submit">Search</button>
      </form>`;
  }
  async handleForm(event) {
    event.preventDefault();
    const input = document.querySelector("input");
    console.log(input.value);
    list.createCards(input.value);
  }
}
