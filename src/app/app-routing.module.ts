import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './components/jokes/jokes.component';
import { PoemsComponent } from './components/poems/poems.component';
import { SongComponent } from './components/song/song.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path:"", component: IndexComponent, data: {animation: 'HomePage'}},
  {path:"song", component: SongComponent, data: {animation: 'SongPage'}},
  {path:"jokes", component: JokesComponent, data: {animation: 'JokePage'}},
  {path:"poems", component: PoemsComponent, data: {animation: 'PoemPage'}},
  {path:"404", component: NotFoundComponent},
  {path:"**", redirectTo: "404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
