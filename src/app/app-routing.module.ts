import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    {
        path: 'products/:id',
        component: ProductDetailsComponent
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {
    constructor(private router: Router) {
        // this.router.navigate(['/home']);
    }
}