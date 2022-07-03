import { NgModule } from '@angular/core';
//declarations
import { AppComponent } from './app.component';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { PokemonDetailDataComponent } from './component/pokemon-detail-data/pokemon-detail-data.component';
//imports
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//providers
import { PokemonService } from './service/pokemon.service';

@NgModule({
  //NOTE:Component追加した時に追加する
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailDataComponent,
  ],
  //NOTE:angularのmoduleを使いたい時に追加する
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
