import { Component } from "../component.js";

export class Footer extends Component {
  constructor(selector) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <footer>
        <adress>
          <div>
            <span>By Marta</span>
            <a href="https://github.com/martiap" target="_blank">
              <img
                src="../assets/github-logo.svg"
                size="50"
                alt="Logo gitHub"
              ></img>
            </a>
          </div>
          <div>
            <span>By Victor</span>
            <a href="https://github.com/victordelara94" target="_blank">
              <img
                src="../assets/github-logo.svg"
                size="50"
                alt="Logo gitHub"
              ></img>
            </a>
          </div>
        </adress>
      </footer>
    `;
  }
}
