import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompleteComponent } from './complete/complete.component';
import { NgModule } from '@angular/core';
import { CartModule } from './cart.module';

const routes: Routes = [
  {
    path: 'cart',
    component: CartModule,
    children: [
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'complete',
        component: CompleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
