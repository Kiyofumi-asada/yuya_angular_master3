import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';
import { PokemonService } from './pokemon.service';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
