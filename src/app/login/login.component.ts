import { Component, OnInit } from "@angular/core";
import { UserService, User } from "../user.service";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Observable } from "rxjs";
// import { __await } from "db/node_modules/tslib/tslib";

@Component({
  selector: "app-dogfood",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user$;
  constructor(private UserService: UserService) {}
  model = {} as User;
  async postUser() {
    await this.UserService.postUser(this.model);
  }

  fetchUser() {
    return (this.user$ = this.UserService.fetchUser());
  }
  ngOnInit() {}
}
