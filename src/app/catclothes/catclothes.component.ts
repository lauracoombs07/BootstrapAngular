import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../clothes.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catclothes',
  templateUrl: './catclothes.component.html',
  styleUrls: ['./catclothes.component.css']
})
export class CatclothesComponent implements OnInit {
  clothes$;
  constructor( private ClothesService: ClothesService ) { }

  fetchCatclothes() {

    return this.clothes$ = this.ClothesService.fetchCatclothes();
  }

  ngOnInit() { this.fetchCatclothes()
  }
  

}