import { Injectable } from '@angular/core';
import { TPokemon, TPokemonArray } from '../types';
import { PokemonMockData } from '../mock/pokemon-mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonData: TPokemonArray = PokemonMockData;
  currentValue: string = '';

  constructor(private http: HttpClient) {
    // this.setAuthorization('my-auth-token');
  }

  getPokemondata(): TPokemonArray {
    return this.pokemonData;
  }

  getPokemon(id: string): TPokemon {
    return this.pokemonData.find(
      (pokemon) => pokemon.id.toString() == id
    ) as TPokemon;
  }
  searchPokemon(keyword: string): TPokemonArray {
    let resultArr: TPokemonArray = [];

    for (let pokemon of this.pokemonData) {
      let dataStr = JSON.stringify(pokemon);
      if (dataStr.search(keyword) >= 0) {
        resultArr.push(pokemon);
      }
    }

    return resultArr;
  }

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response',
    body: null,
  };

  public get(): Promise<any[]> {
    console.log('2----');
    return this.http
      .get('/pokemon', this.httpOptions)
      .toPromise()
      .then((res) => {
        console.log(res);

        const response: any = res;
        return response;
      });
    // .catch(this.errorHandler);
  }
}
