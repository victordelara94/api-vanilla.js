export class Component {
  element;
  selector;
  template;
  constructor(selector) {
    this.selector = selector;
  }
  render(position = "beforeend") {
    const element = document.querySelector(this.selector);
    this.element = element;
    element.insertAdjacentHTML(position, this.template);
  }
}
