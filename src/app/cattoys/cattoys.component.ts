import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cattoys',
  templateUrl: './cattoys.component.html',
  styleUrls: ['./cattoys.component.css']
})
export class CattoysComponent implements OnInit {
  toys$;
  constructor( private ToysService: ToysService ) { }

  fetchCattoys() {

    return this.toys$ = this.ToysService.fetchCattoys();
  }

  ngOnInit() { this.fetchCattoys()
  }
  

}