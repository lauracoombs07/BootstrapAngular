import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogfood',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user$;
  constructor( private UserService: UserService ) { }

  fetchUser() {

    return this.user$ = this.UserService.fetchUser();
  }

  ngOnInit() { this.fetchUser()
  }
  

}