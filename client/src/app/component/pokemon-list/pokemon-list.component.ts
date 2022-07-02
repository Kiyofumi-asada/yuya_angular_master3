//angular
import { Component, OnInit } from '@angular/core';
//service
import { PokemonService } from '../../service/pokemon.service';
//types
import { Pokemon } from '../../types/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent implements OnInit {
  pokemonData: Array<any> = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    //this.pokemonData = this.pokemonService.get();
  }
  searchPokemon(keyword: string) {
    this.pokemonData = this.pokemonService.searchPokemon(keyword);
    this.pokemonService.currentValue = keyword;
  }

  getCurrentValue() {
    return this.pokemonService.currentValue;
  }
}
