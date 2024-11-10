import { Routes } from '@angular/router';

// features module
import { HomeComponent, NotFoundComponent } from './features';

export const APP_ROUTES: Routes = [
    { 
        path: 'home',
        loadComponent: () =>
            import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {     
        path: 'product',
        loadChildren: () => 
            import('./features/product/product.routes').then(m => m.PRODUCT_ROUTES)
    },
    { 
        path: '',   redirectTo: '/home', pathMatch: 'full'
    },
    { 
        path: '**', component: NotFoundComponent
    },  
];
