import { Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductFruitComponent } from './modules/fruit/fruit.component';
import { ProductFishComponent } from './modules/fish/fish.component';

export const PRODUCT_ROUTES: Routes = [
    {
        path: '', component: ProductComponent,
        children: [
            {
                path: 'fruit', component: ProductFruitComponent
            },
            { 
                path: 'fish', component: ProductFishComponent
            },
            { 
                path: '', redirectTo: '/product/fruit', pathMatch: 'full'
            },
        ],
    },
];
