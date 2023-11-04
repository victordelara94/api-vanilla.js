import { Buttons } from "./components/buttons/button.js";
import { Footer } from "./components/footer/footer.js";
import { Form } from "./components/form/form.js";
import { Header } from "./components/header/header.js";
import { List } from "./components/list/list.js";
import { ApiPokeRepository } from "./repository/poke-repo.js";
import { PagingService } from "./services/paging.service.js";
import { StateService } from "./services/state.service.js";

export const stateService = new StateService();
export const repo = new ApiPokeRepository();
export const pagingService = new PagingService(20);
await stateService.setTypes();
new Header(".root");
export const form = new Form(".root");
export const list = new List(".root");
export const buttons = new Buttons(".root");
new Footer(".root");
stateService.setPagePokemons();
export const previousPageElement = document.querySelector(".previous-button");
export const nextPageElement = document.querySelector(".next-button");
const formElement = document.querySelector("form");
nextPageElement.addEventListener("click", (event) => {
  buttons.changePage(event);
});

previousPageElement.addEventListener("click", (event) => {
  buttons.changePage(event);
});
formElement.addEventListener("submit", (event) => {
  form.handleForm(event);
});
