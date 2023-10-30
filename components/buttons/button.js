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
    return `<button class="previousButton hidden" >Previous</button>
    <button class="nextButton">Next</button>`;
  }
  changePage(event) {
    if (event.target.className === "nextButton") {
      this.offSet = pagingService.nextPage();
      previousPageElement.classList.remove("hidden");
    }

    if (event.target.className === "previousButton")
      this.offSet = pagingService.previousPage();
    if (this.offSet === 0) {
      previousPageElement.classList.add("hidden");
    }
  }
}
