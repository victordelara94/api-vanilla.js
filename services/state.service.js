import { list, pagingService, repo } from "../main.js";
export class StateService {
  pagePokemons = [];
  actualPokemon;
  types = [];
  allOneTypePokemons = [];
  pageOneTypePokemons = [];
  constructor() {}

  async setPagePokemons() {
    this.pagePokemons = [];
    const firstResponse = await repo.getAll();
    const pokemons = firstResponse.results;

    await Promise.all(
      pokemons.map(async (pokemon) => {
        const secondResponse = await repo.getOne(pokemon.name);
        pokemon.image = secondResponse.sprites.other.dream_world.front_default;
        if (pokemon.id > 649) {
          pokemon.image = secondResponse.sprites.front_default;
        }
        pokemon.id = secondResponse.id;
        this.pagePokemons.push(pokemon);
      })
    );
    this.pagePokemons.sort((a, b) => a.id - b.id);
    list.createCards();
  }
  async setOneTypePokemons(type) {
    this.allOneTypePokemons = [];
    const firstResponse = await repo.getByType(type);
    firstResponse.pokemon.forEach((pokemon) =>
      this.allOneTypePokemons.push(pokemon.pokemon)
    );

    await Promise.all(
      this.allOneTypePokemons.map(async (pokemon) => {
        const secondResponse = await repo.getOne(pokemon.name);
        pokemon.id = secondResponse.id;
        pokemon.image = secondResponse.sprites.other.dream_world.front_default;
        if (pokemon.id > 649) {
          pokemon.image = secondResponse.sprites.front_default;
        }
        if (!pokemon.image) {
          pokemon.image =
            secondResponse.sprites.other["official-artwork"].front_default;
        }
        if (!pokemon.image) {
          this.allOneTypePokemons = this.allOneTypePokemons.filter(
            (item) => item !== pokemon
          );
        }
      })
    );
    this.allOneTypePokemons.sort((a, b) => a.id - b.id);
    pagingService.setPaggingForTypes(1);
  }

  async setActualPokemon(identity) {
    this.actualPokemon = undefined;
    this.actualPokemon = await repo.getOne(identity);
    this.actualPokemon.image =
      this.actualPokemon.sprites.other.dream_world.front_default;
    if (this.actualPokemon.id > 649) {
      this.actualPokemon.image = this.pokemons.sprites.front_default;
    }
    list.createCards(this.actualPokemon);
  }
  async setTypes() {
    this.types = await repo.getTypes();
  }
}
