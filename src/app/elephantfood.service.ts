import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
//dog food 

export interface elephantFood {
    name: string;
    description: string;
    price: number;
    picture: string;
}
@Injectable()
export class elephantFoodService {
    
    constructor(private http: HttpClient ) {}

    fetchFood(): Observable<elephantFood> {

        return this.http
            .get<elephantFood>('https://teamangular-lgjhyymvwp.now.sh/api/food'+'?filter={"where": {"animal": "elephant"}}');
    }

    // fetchCatFood(): Observable<catFood> {

    //     return this.http
    //         .get<catFood>('https://teamangular-lgjhyymvwp.now.sh/api/food'+'?filter={"where": {"animal": "cat"}}');
    // }

}
