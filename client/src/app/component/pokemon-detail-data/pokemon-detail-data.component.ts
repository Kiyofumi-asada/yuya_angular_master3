//angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//service
import { PokemonService } from '../../service/pokemon.service';
//types
import { initialPokemonData, TPokemon } from '../../types';

@Component({
  selector: 'app-pokemon-detail-data',
  templateUrl: './pokemon-detail-data.component.html',
  styleUrls: ['./pokemon-detail-data.component.sass'],
})
export class PokemonDetailDataComponent implements OnInit {
  pokemonNo = this.route.snapshot.paramMap.get('id');
  pokemonDetailData: TPokemon = initialPokemonData;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonService
      .getPokemonDetailList(this.pokemonNo as string)
      .subscribe((res) => {
        this.pokemonDetailData = res.data;
      });
  }

  backToList() {
    this.location.back();
  }
}
