import { Component } from "../component.js";

export class Header extends Component {
  constructor(selector) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="header">
  <h1><img class="tittle" src="../assets/pokemon-logo.svg" size="50" alt=""></h1>
   </header>
    `;
  }
}
