import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],    
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss'
})
export class ProductComponent {}