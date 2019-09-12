import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'movie-list', component: MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
