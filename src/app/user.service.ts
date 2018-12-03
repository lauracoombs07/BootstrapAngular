import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })

  };
  const apiUrl = "https://teamangular-lgjhyymvwp.now.sh/api/users";
  
export interface User {
    name: string
    is_admin: boolean
}
@Injectable()


export class UserService {
    
    constructor(private http: HttpClient ) {}

    fetchUser(): Observable<User> {
        // const params = new HttpParams()
        //     .set('id', '123')
        //     .set('includeAddress', 'true');
        
            // const newUser = {
            //     name: 'Laura'
            // }
        return this.http
            .get<User>('https://teamangular-lgjhyymvwp.now.sh/api/users');
    }


}



