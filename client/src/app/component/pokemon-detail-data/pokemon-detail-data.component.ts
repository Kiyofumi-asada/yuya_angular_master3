//angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//service
import { PokemonService } from '../../service/pokemon.service';
//types
import { Pokemon } from '../../types/pokemon';

@Component({
  selector: 'app-pokemon-detail-data',
  templateUrl: './pokemon-detail-data.component.html',
  styleUrls: ['./pokemon-detail-data.component.sass'],
})
export class PokemonDetailDataComponent implements OnInit {
  pokemonId: string;
  pokemon!: Pokemon;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private psv: PokemonService
  ) {
    this.pokemonId = '';
  }

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.paramMap.get('id') as string;
    this.pokemon = this.psv.getPokemon(this.pokemonId);
  }

  backToList() {
    this.location.back();
  }
}
