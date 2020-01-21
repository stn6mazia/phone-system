import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneSystemComponent } from './phone-system.component';
import { CurrencyFormat } from './shared/pipes/currency-format.pipe';



@NgModule({
  declarations: [
    PhoneSystemComponent,
    CurrencyFormat
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhoneSystemComponent
  ]
})
export class PhoneSystemModule { }
