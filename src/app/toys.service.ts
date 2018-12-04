import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


export interface Toys {
    name: string;
    description: string;
    price: number;
    picture: string;
}
@Injectable()
export class ToysService {
    
    constructor(private http: HttpClient ) {}

    fetchToys(): Observable<Toys> {

        return this.http
            .get<Toys>('https://teamangular-lgjhyymvwp.now.sh/api/toys'+'?filter={"where": {"animal": "dog"}}');
    }

}