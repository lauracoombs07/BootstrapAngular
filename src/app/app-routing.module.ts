import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { ElephantComponent } from './elephant/elephant.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { CatfoodComponent } from './catfood/catfood.component';
import { CatclothesComponent } from './catclothes/catclothes.component';
import { CattoysComponent } from './cattoys/cattoys.component'
import { DogfoodComponent } from './dogfood/dogfood.component';
import { DogclothesComponent } from './dogclothes/dogclothes.component';
import { DogtoysComponent } from './dogtoys/dogtoys.component'
import { ElephantfoodComponent } from './elephantfood/elephantfood.component';
import { ElephantclothesComponent } from './elephantclothes/elephantclothes.component';
import { ElephanttoysComponent } from './elephanttoys/elephanttoys.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  // { path: 'Cats', redirectTo: '/cat/cat.component.html', pathMatch: 'full'}
  { path: '', redirectTo: "/home", pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'cat', component: CatComponent},
  { path: 'dog', component: DogComponent},
  { path: 'elephant', component: ElephantComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'catfood', component: CatfoodComponent},
  { path: 'catclothes', component: CatclothesComponent},
  { path: 'cattoys', component: CattoysComponent},
  { path: 'dogfood', component: DogfoodComponent},
  { path: 'dogclothes', component: DogclothesComponent},
  { path: 'dogtoys', component: DogtoysComponent},
  { path: 'elephantfood', component: ElephantfoodComponent},
  { path: 'elephantclothes', component: ElephantclothesComponent},
  { path: 'elephanttoys', component: ElephanttoysComponent},
  { path: 'admin', component: AdminComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
