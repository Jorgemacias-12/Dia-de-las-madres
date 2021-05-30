import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { SongComponent } from './components/song/song.component';
import { JokesComponent } from './components/jokes/jokes.component';
import { PoemsComponent } from './components/poems/poems.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SongComponent,
    JokesComponent,
    PoemsComponent,
    NotFoundComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
