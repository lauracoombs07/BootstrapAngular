import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user$;
  constructor( private UserService: UserService) { }

  fetchUser() {
    return this.user$ = this.UserService.fetchUser();
  }
  deleteUser(userID) {
    return this.user$ = this.UserService.deleteUser(userID);
  }
  ngOnInit() {
  }

}