import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { ElephantComponent } from './elephant/elephant.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: 'Cats', redirectTo: '/cat/cat.component.html', pathMatch: 'full'}
  { path: 'cat', component: CatComponent},
  { path: 'dog', component: DogComponent},
  { path: 'elephant', component: ElephantComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
