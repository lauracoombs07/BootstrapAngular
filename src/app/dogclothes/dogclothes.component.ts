import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../clothes.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogclothes',
  templateUrl: './dogclothes.component.html',
  styleUrls: ['./dogclothes.component.css']
})
export class DogclothesComponent implements OnInit {
  clothes$;
  constructor( private ClothesService: ClothesService ) { }

  fetchClothes() {

    return this.clothes$ = this.ClothesService.fetchClothes();
  }

  ngOnInit() { this.fetchClothes()
  }
  

}