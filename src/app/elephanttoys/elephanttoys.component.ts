import { Component, OnInit } from '@angular/core';
import { ToysService } from '../toys.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-elephanttoys',
  templateUrl: './elephanttoys.component.html',
  styleUrls: ['./elephanttoys.component.css']
})
export class ElephanttoysComponent implements OnInit {
  toys$;
  constructor( private ToysService: ToysService ) { }

  fetchElephanttoys() {

    return this.toys$ = this.ToysService.fetchElephanttoys();
  }

  ngOnInit() { this.fetchElephanttoys()
  }
  

}