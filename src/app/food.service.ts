import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


export interface Food {
    name: string;
    description: string;
}
@Injectable()
export class FoodService {
    
    constructor(private http: HttpClient ) {}

    fetchFood(): Observable<Food> {

        return this.http
            .get<Food>('https://teamangular-lgjhyymvwp.now.sh/api/food');
    }


}
