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
}
