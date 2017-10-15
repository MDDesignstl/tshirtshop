import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ShopComponent} from './components/shop/shop.component';





const appRoutes: Routes = [

    {
        path:'',
        component:HomeComponent
    },
    {
        path:'search',
        component:SearchComponent
    },
    {
        path:'shop',
        component:ShopComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'admin',
        component:AdminComponent
    }
    ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);