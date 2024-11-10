import { Routes } from '@angular/router';

//internale module product component
import { ProductComponent } from './product.component';

// sub-modules from the product module
import { ProductFruitComponent } from './features/fruit';
import { ProductFishComponent } from './features/fish';

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
