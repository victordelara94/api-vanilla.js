import { list } from "../main.js";

export class PagingService {
  offSet = 0;
  limit = 20;
  constructor(limit) {
    this.limit = limit;
  }

  nextPage() {
    this.offSet += this.limit;
    list.createCards();
  }

  previousPage() {
    this.offSet -= this.limit;
    list.createCards();
  }
  getOffSet() {
    return this.offSet;
  }
}
