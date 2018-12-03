import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


export interface Food {
    name: string;
    description: string;
    price: number;
    picture: string;
}
@Injectable()
export class FoodService {
    
    constructor(private http: HttpClient ) {}

    fetchFood(): Observable<Food> {

        return this.http
            .get<Food>('https://teamangular-lgjhyymvwp.now.sh/api/food'+'?filter={"where": {"animal": "dog"}}');
    }

    // fetchCatFood(): Observable<catFood> {

    //     return this.http
    //         .get<catFood>('https://teamangular-lgjhyymvwp.now.sh/api/food'+'?filter={"where": {"animal": "cat"}}');
    // }

}
