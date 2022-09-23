import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConvertToSpacesPipe } from '../../shared/pipes/convert-to-spaces.pipe';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forRoot([]),
    SharedModule
  ]
})
export class ProductsModule { }
