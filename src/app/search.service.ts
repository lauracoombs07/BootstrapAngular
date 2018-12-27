import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';


export interface Products {
    name: string;
    food: string;
    price: number;
    description: string;
}
@Injectable()
export class SearchService {
    
    constructor(private httpClient: HttpClient ) {}

    fetchProduct(): Observable<Products> {

        return this.httpClient
            .get<Products>('https://teamangular-lgjhyymvwp.now.sh/api/products');
            
    }

    async postUser(formData): Promise<Products> {

        return await this.httpClient.post<Products>(
            "https://teamangular-lgjhyymvwp.now.sh/api/products",
            formData
            ).toPromise()
            
    }
}