export class Component {
  element;
  selector;
  template;
  constructor(selector) {
    this.selector = selector;
  }
  render(position = "beforeend") {
    this.element = document.querySelector(this.selector);
    this.element.insertAdjacentHTML(position, this.template);
  }
}
