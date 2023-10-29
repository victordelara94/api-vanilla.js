import { Buttons } from "./components/buttons/button.js";
import { Footer } from "./components/footer/footer.js";
import { Header } from "./components/header/header.js";
import { List } from "./components/list/list.js";
import { PagingService } from "./services/paging.service.js";

export const pagingService = new PagingService();
new Header(".root");
export const list = new List(".root");
export const buttons = new Buttons(".root");
new Footer(".root");
export const previousPageElement = document.querySelector(".previousButton");
const nextPageElement = document.querySelector(".nextButton");
nextPageElement.addEventListener("click", (event) => {
  buttons.changePage(event);
});

previousPageElement.addEventListener("click", (event) => {
  buttons.changePage(event);
});
