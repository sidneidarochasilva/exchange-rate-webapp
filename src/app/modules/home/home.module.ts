import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import { ExchangeRateCardListComponent } from './exchange-rate-card-list/exchange-rate-card-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExchangeRateCardComponent } from './exchange-rate-card/exchange-rate-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
   
    HomeComponent,
    ExchangeRateCardListComponent,
    ExchangeRateCardComponent
  ],
  
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule
    
  ],

})
export class HomeModule { }
