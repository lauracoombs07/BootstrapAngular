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
    
    constructor(private httpClient: HttpClient ) {}

    fetchUser(): Observable<User> {

        return this.httpClient
            .get<User>('https://teamangular-lgjhyymvwp.now.sh/api/users');
    }

    async postUser(formData): Promise<User> {

        return await this.httpClient.post<User>(
            "https://teamangular-lgjhyymvwp.now.sh/api/users",
            formData
            ).toPromise()
            
    }

}



// addHero (hero: Hero): Observable<Hero> {
//     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//       .pipe(
//         catchError(this.handleError('addHero', hero))
//       );
//   }