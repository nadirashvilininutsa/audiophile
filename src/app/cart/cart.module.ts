import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { SummaryComponent } from './summary/summary.component';
import { CompleteComponent } from './complete/complete.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    SummaryComponent,
    CompleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
