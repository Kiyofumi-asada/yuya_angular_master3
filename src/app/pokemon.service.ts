import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon/pokemon';
import { POKEMONDATA } from './pokemon/pokemondata';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  pokemondata: Pokemon[] = POKEMONDATA;

  currentValue: string = '';

  constructor(private http: HttpClient) {
    // this.setAuthorization('my-auth-token');
  }
  
  getPokemondata(): Pokemon[] {
    return this.pokemondata;
  }

  getPokemon(id: string): Pokemon {
    return this.pokemondata.find(pokemon => pokemon.id.toString() == id) as Pokemon;
  }
  searchPokemon(keyword: string): Pokemon[] {
    let resultArr: Pokemon[] = [];

    for (let pokemon of this.pokemondata) {
      let dataStr = JSON.stringify(pokemon);
      if (dataStr.search(keyword) >= 0) {
        resultArr.push(pokemon);
      }
    }

    return resultArr;
  }

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    observe: 'response',
    body: null
  };


  public get(): Promise<any[]> {
    console.log("2----")
    return this.http.get('/pokemon', this.httpOptions)
      .toPromise()
      .then((res) => {
        console.log(res);

        const response: any = res;
        return response;
      })
      // .catch(this.errorHandler);
  }
}
