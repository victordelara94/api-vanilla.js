import { list, stateService } from "../main.js";

export class PagingService {
  offSet = 0;
  limit = 20;
  constructor(limit) {
    this.limit = limit;
  }

  nextPage() {
    this.offSet += this.limit;
    if (stateService.pageOneTypePokemons.length > 0) {
      this.setPaggingForTypes();
      return;
    }
    stateService.setPagePokemons();
  }

  previousPage() {
    this.offSet -= this.limit;
    if (stateService.pageOneTypePokemons.length > 0) {
      this.setPaggingForTypes();
      return;
    }
    stateService.setPagePokemons();
  }
  getOffSet() {
    return this.offSet;
  }
  setPaggingForTypes() {
    stateService.pageOneTypePokemons = stateService.allOneTypePokemons.slice(
      this.offSet,
      this.offSet + 1 * this.limit
    );
    list.createCards(stateService.pageOneTypePokemons);
  }
}
