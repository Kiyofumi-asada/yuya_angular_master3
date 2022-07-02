//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//component
import { PokemonDetailDataComponent } from '../component/pokemon-detail-data/pokemon-detail-data.component';
import { PokemonListComponent } from '../component/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonListComponent },
  {
    path: 'pokemon/No/:id',
    component: PokemonDetailDataComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
