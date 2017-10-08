import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService{
    private apiCall: string;

    constructor(private _http:Http){
    }

    getProducts() {
        this.apiCall = 'localhost:3000/products';
        return this._http.get(this.apiCall)
            .map(res => res.json());
    }

}