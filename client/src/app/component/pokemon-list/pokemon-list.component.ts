//angular
import { Component, OnInit } from '@angular/core';
//service
import { PokemonService } from '../../service/pokemon.service';
//types
import { TPokemon } from '../../types';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent implements OnInit {
  pokemonData: Array<TPokemon> = [];
  searchText: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    //コンポーネント表示するときに、api GET /pokemon を叩く
    this.pokemonService.getPokemonList().subscribe((res) => {
      this.pokemonData = res.data;
    });
  }
}
