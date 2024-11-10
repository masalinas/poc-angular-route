import { Routes } from '@angular/router';

import { ProductComponent } from './product.component';

// sub-modules from the product module
import { ProductFruitComponent } from './sub-modules/fruit';
import { ProductFishComponent } from './sub-modules/fish';

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
