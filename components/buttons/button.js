import { pagingService, previousPageElement } from "../../main.js";
import { Component } from "../component.js";

export class Buttons extends Component {
  offSet;
  pagingService;
  constructor(selector) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }
  createTemplate() {
    return `<div class="buttons-container"><button class="previous-button hidden" >Previous</button>
    <button class="next-button">Next</button></div>`;
  }
  changePage(event) {
    if (event.target.className === "next-button") {
      pagingService.nextPage();
      this.offSet = pagingService.getOffSet();
      previousPageElement.classList.remove("hidden");
    }

    if (event.target.className === "previous-button") {
      pagingService.previousPage();
      this.offSet = pagingService.getOffSet();
    }
    if (this.offSet === 0) {
      previousPageElement.classList.add("hidden");
    }
  }
}
