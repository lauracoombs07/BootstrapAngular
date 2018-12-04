import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogtoys',
  templateUrl: './dogtoys.component.html',
  styleUrls: ['./dogtoys.component.css']
})
export class DogtoysComponent implements OnInit {
  toys$;
  constructor( private ToysService: ToysService ) { }

  fetchToys() {

    return this.toys$ = this.ToysService.fetchToys();
  }

  ngOnInit() { this.fetchToys()
  }
  

}
