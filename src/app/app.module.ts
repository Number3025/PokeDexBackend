import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { PokemonSideBarComponent } from './pokemon-side-bar/pokemon-side-bar.component';
import { PokemonSideComponent } from './pokemon-side/pokemon-side.component';
import { PokemonService } from './shared/service/pokemon.service';
import { UserProfileComponent } from './app.component'
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './app.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    
    PokemonComponent,
    PokemonDetailComponent,
    SearchPipe,
    PokemonSideBarComponent,
    PokemonSideComponent,
    AuthButtonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-ifi9lb0f.eu.auth0.com',
      clientId: 'gJYitdpJTFbZDU9thwdRSTxeyCnLPUdp'
    }),
   
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
