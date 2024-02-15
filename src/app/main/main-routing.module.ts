import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main.module';
import { NgModule } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainModule,
    children: [
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'panel',
        component: PanelComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
