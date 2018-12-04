import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { FoodService } from './food.service';
import { ToysService } from './toys.service';
import { ClothesService } from './clothes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user$;
  food$;
  toys$;
  clothes$;

  constructor(
    private FoodService: FoodService, 
    private UserService: UserService, 
    private ToysService: ToysService,
    private ClothesService: ClothesService
    ) {}
  
  fetchUser() {

    this.user$ = this.UserService.fetchUser();
  }
  fetchFood() {

    this.food$ = this.FoodService.fetchFood();
  }
  fetchToys() {

  this.toys$ = this.ToysService.fetchToys();
}
  fetchClothes() {

  this.clothes$ = this.ClothesService.fetchClothes();
}

}

@Component({
  selector: 'page-card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class PageCard {
  title = 'myproject';
  getData(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData;
    }
}