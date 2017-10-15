import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService{
    private apiCall_gp: string;

    constructor(private _http:Http){
    }

    getProducts() {
        this.apiCall_gp = 'http://localhost:3000/product';
        return this._http.get(this.apiCall_gp)
            .map(res => res.json());
    }

}