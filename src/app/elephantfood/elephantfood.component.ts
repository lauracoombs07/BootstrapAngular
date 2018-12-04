import { Component, OnInit } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-elephantfood',
  templateUrl: './elephantfood.component.html',
  styleUrls: ['./elephantfood.component.css']
})
export class ElephantfoodComponent implements OnInit {
  food$;
  constructor( private FoodService: FoodService ) { }

  fetchElephantfood() {

    return this.food$ = this.FoodService.fetchElephantfood();
  }

  ngOnInit() { this.fetchElephantfood()
  }
  

}