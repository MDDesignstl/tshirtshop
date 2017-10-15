import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Product} from '../../../product'
@Component({
    moduleId:module.id,
    selector: 'shop',
    templateUrl: 'shop.component.html'
})
export class ShopComponent implements OnInit { 
    searchRes: Product[];
    constructor(private _apiService:ApiService){
    }

    getProducts(){
        this._apiService.getProducts().subscribe(res=> {
            this.searchRes = res;
            console.log(this.searchRes);
        });
    }

    ngOnInit(){
        this.getProducts();
    }

    
}

 