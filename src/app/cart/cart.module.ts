import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { SummaryComponent } from './summary/summary.component';
import { CompleteComponent } from './complete/complete.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [CheckoutComponent, SummaryComponent, CompleteComponent, CartComponent],
  imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
