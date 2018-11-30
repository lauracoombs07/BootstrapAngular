import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { ElephantComponent } from './elephant/elephant.component';

const routes: Routes = [
  // { path: 'Cats', redirectTo: '/cat/cat.component.html', pathMatch: 'full'}
  { path: 'cat', component: CatComponent},
  { path: 'dog', component: DogComponent},
  { path: 'elephant', component: ElephantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
