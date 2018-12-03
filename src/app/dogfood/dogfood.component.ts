import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogfood',
  templateUrl: './dogfood.component.html',
  styleUrls: ['./dogfood.component.css']
})
export class DogfoodComponent implements OnInit {
  food$;
  constructor( private FoodService: FoodService ) { }

  fetchFood() {

    return this.food$ = this.FoodService.fetchFood();
  }

  ngOnInit() { this.fetchFood()
  }
  

}
