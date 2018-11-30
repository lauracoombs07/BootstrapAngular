import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  getData(outlet: RouterOutlet){
  return outlet && outlet.activatedRouteData;
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
