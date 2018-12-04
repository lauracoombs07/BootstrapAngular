import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


export interface Clothes {
    name: string;
    description: string;
    price: number;
    picture: string;
}
@Injectable()
export class ClothesService {
    
    constructor(private http: HttpClient ) {}

    fetchClothes(): Observable<Clothes> {

        return this.http
            .get<Clothes>('https://teamangular-lgjhyymvwp.now.sh/api/clothes'+'?filter={"where": {"animal": "dog"}}');
    }

}
