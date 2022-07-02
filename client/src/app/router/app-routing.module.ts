//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//component
import { PokemonDetailDataComponent } from '../component/pokemon-detail-data/pokemon-detail-data.component';
import { PokemonListComponent } from '../component/pokemon-list/pokemon-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
      { path: 'pokemon-list', component: PokemonListComponent },
      {
        path: 'pokemon-detail-data/:id',
        component: PokemonDetailDataComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
