import { Footer } from "./components/footer/footer.js";
import { Header } from "./components/header/header.js";
import { List } from "./components/list/list.js";

const components = [
  new Header(".root"),
  new List(".root"),
  new Footer(".root"),
];
console.log(components);
components[0].render;
