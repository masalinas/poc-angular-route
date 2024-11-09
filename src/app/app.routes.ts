import { Routes } from '@angular/router';

// main module routes
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const APP_ROUTES: Routes = [
    { 
        path: 'home', component: HomeComponent
    },
    {     
        path: 'product',
        loadChildren: () => import('./modules/product/product.routes').then(m => m.PRODUCT_ROUTES)
    },
    { 
        path: '',   redirectTo: '/home', pathMatch: 'full'
    },
    { 
        path: '**', component: NotFoundComponent
    },  
];
