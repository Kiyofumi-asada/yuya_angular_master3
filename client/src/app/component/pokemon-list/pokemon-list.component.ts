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
  pokemondata: Array<any> = [];

  constructor(private psv: PokemonService) {}

  ngOnInit(): void {
    //this.pokemondata = this.psv.get();
  }
  searchPokemon(keyword: string) {
    this.pokemondata = this.psv.searchPokemon(keyword);
    this.psv.currentValue = keyword;
  }

  getCurrentValue() {
    return this.psv.currentValue;
  }
}
