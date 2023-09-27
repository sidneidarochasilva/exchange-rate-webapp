import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRateService } from './services/exchange-rate.service';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ExchangeRateService
  ]
})
export class SharedModule { }
