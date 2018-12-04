import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../clothes.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-elephantclothes',
  templateUrl: './elephantclothes.component.html',
  styleUrls: ['./elephantclothes.component.css']
})
export class ElephantclothesComponent implements OnInit {
  clothes$;
  constructor( private ClothesService: ClothesService ) { }

  fetchElephantclothes() {

    return this.clothes$ = this.ClothesService.fetchElephantclothes();
  }

  ngOnInit() { this.fetchElephantclothes()
  }
  

}