import { Injectable } from '@angular/core';
import { TPokemonArray, TResPokemon, TResPokemonList } from '../types';
import { PokemonMockData } from '../helper/pokemon-mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  //property
  pokemonData: TPokemonArray = PokemonMockData;
  currentValue: string = '';

  //api path
  url: string = 'http://localhost:4200/app';
  path = '/pokemon';
  apiUrl: string = `${this.url}${this.path}`;

  constructor(private _http: HttpClient) {}

  /**
   * api GET 一覧 /pokemon
   * @returns ポケモンデータ一覧
   */
  getPokemonList(): Observable<TResPokemonList> {
    return this._http.get<TResPokemonList>(this.apiUrl);
  }

  /**
   * api GET 詳細 /pokemon/
   * @returns ポケモンデータ1件取得
   */
  getPokemonDetailList(pokemonNo: string): Observable<TResPokemon> {
    return this._http.get<TResPokemon>(`${this.apiUrl}/${pokemonNo}`);
  }

  /**
   * ポケモン検索の関数
   * @param keyword 検索文字
   * @returns ヒットしたデータを返す
   */
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
}
