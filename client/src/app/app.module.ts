import { NgModule } from '@angular/core';
//declarations
import { AppComponent } from './app.component';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { PokemonDataComponent } from './component/pokemon-data/pokemon-data.component';
//imports
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//providers
import { PokemonService } from './service/pokemon.service';

@NgModule({
  //NOTE:Component追加した時に追加する
  declarations: [AppComponent, PokemonListComponent, PokemonDataComponent],
  //NOTE:angularのmoduleを使いたい時に追加する
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
