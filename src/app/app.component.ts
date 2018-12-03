import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { FoodService } from './food.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user$;
  food$;
  constructor(
    public FoodService: FoodService, 
    public UserService: UserService 
    
    ) {}
  
  fetchUser() {

    this.user$ = this.UserService.fetchUser();
  }

  fetchFood() {

    this.food$ = this.FoodService.fetchFood();
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
// export class AppComponent {
//   title = 'myproject';
//   getData(outlet: RouterOutlet){
//   return outlet && outlet.activatedRouteData;
//   }