import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


export interface User {
    id: number;
    email: string;
    name: string;
    password: string;
    is_admin: boolean;
}
@Injectable()
export class UserService {
    
    constructor(private http: HttpClient ) {}

    fetchUser(): Observable<User> {

        return this.http
            .get<User>('https://teamangular-lgjhyymvwp.now.sh/api/users');
    }

    postUser(): Observable<User> {

        return this.http
            .get<User>('https://teamangular-lgjhyymvwp.now.sh/api/users');
    }

}



// addHero (hero: Hero): Observable<Hero> {
//     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//       .pipe(
//         catchError(this.handleError('addHero', hero))
//       );
//   }