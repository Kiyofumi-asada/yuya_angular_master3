//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//component
import { PokemonDataComponent } from '../component/pokemon-data/pokemon-data.component';
import { PokemonListComponent } from '../component/pokemon-list/pokemon-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
      { path: 'pokemon-list', component: PokemonListComponent },
      { path: 'pokemon-data/:id', component: PokemonDataComponent },
    ]),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
