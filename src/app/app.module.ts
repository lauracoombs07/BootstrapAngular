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

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent,
    CatComponent,
    ElephantComponent,
    LoginComponent,
    CardsComponent
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
