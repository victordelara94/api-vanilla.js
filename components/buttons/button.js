import { Component } from "../component.js";
import { List } from "../list/list.js";

export class Buttons extends Component {
  offSet;
  constructor(selector, offSet) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    this.offSet = offSet;
  }
  createTemplate() {
    return `<button class="previousButton">Previous</button>
    <button class="nextButton">Next</button>`;
  }
  nextPage(event) {
    if (event.target.className === "nextButton") {
      this.offSet = this.offSet + 20;
      new List(".root", this.offSet);
    }
    if (event.target.className === "previousButton") {
      this.offSet = this.offSet - 20;
      new List(".root", this.offSet);
    }

    //const previousPage = document.querySelector('.previousButton');
    //  const handleClick =() =>{
    // if()
    //  }
  }
}
//a=new buttons; add('click',a.nextPage())
