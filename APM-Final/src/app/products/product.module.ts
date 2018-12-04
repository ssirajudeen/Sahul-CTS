import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ButtonsModule,
    NgxDatatableModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class ProductModule { }
