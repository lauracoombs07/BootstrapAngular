import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-dogfood',
  templateUrl: './dogfood.component.html',
  styleUrls: ['./dogfood.component.css']
})
export class DogfoodComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  ngOnInit() {
  }

}
