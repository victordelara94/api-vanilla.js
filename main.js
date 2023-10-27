import { Footer } from "./components/footer.js";
import { Header } from "./components/header.js";

const components = [new Header(".root"), new Footer(".root")];
console.log(components);
components[0].render;
