import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { ElephantComponent } from './elephant/elephant.component';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { CatfoodComponent } from './catfood/catfood.component';
import { CatclothesComponent } from './catclothes/catclothes.component';
import { CattoysComponent } from './cattoys/cattoys.component';
import { DogtoysComponent } from './dogtoys/dogtoys.component';
import { DogclothesComponent } from './dogclothes/dogclothes.component';
import { DogfoodComponent } from './dogfood/dogfood.component';
import { ElephantfoodComponent } from './elephantfood/elephantfood.component';
import { ElephantclothesComponent } from './elephantclothes/elephantclothes.component';
import { ElephanttoysComponent } from './elephanttoys/elephanttoys.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent,
    CatComponent,
    ElephantComponent,
    LoginComponent,
    CardsComponent,
    CatfoodComponent,
    CatclothesComponent,
    CattoysComponent,
    DogtoysComponent,
    DogclothesComponent,
    DogfoodComponent,
    ElephantfoodComponent,
    ElephantclothesComponent,
    ElephanttoysComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
