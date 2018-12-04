import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catfood',
  templateUrl: './catfood.component.html',
  styleUrls: ['./catfood.component.css']
})
export class CatfoodComponent implements OnInit {
  food$;
  constructor( private FoodService: FoodService ) { }

  fetchCatfood() {

    return this.food$ = this.FoodService.fetchCatfood();
  }

  ngOnInit() { this.fetchCatfood()
  }
  

}