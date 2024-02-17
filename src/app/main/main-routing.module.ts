import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { CategoriesComponent } from './categories/categories.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
        path: '',
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
export class MainRoutingModule {}
