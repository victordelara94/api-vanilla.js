import { list } from "../main.js";

export class PagingService {
  offSet = 0;
  limit;
  setOffSetAndLimit(firstResponse) {
    const nextPageOffSett = Number(
      firstResponse.next.slice(
        firstResponse.next.indexOf("=") + 1,
        firstResponse.next.indexOf("&")
      )
    );
    this.limit = Number(
      firstResponse.next.slice(firstResponse.next.lastIndexOf("=") + 1)
    );

    this.offSet = nextPageOffSett - this.limit;
    return nextPageOffSett - this.limit;
  }

  nextPage() {
    this.offSet += this.limit;
    list.createCards(this.offSet);
    return this.offSet;
  }

  previousPage() {
    this.offSet -= this.limit;
    list.createCards(this.offSet);
    return this.offSet;
  }
}
