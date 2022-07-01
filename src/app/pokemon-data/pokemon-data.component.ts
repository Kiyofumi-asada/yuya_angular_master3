import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Pokemon} from '../pokemon/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.sass']
})
export class PokemonDataComponent implements OnInit {
  pokemonid :string;
  pokemon !:Pokemon;
  constructor(private route:ActivatedRoute, private location:Location,private psv: PokemonService) {
  this.pokemonid = ""; }

  ngOnInit(): void {
    this.pokemonid = this.route.snapshot.paramMap.get('id') as string;
    this.pokemon = this.psv.getPokemon(this.pokemonid);
  }

  backToList(){this.location.back();
  }
 }
