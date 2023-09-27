import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { ExchangeRateCardListComponent } from './exchange-rate-card-list/exchange-rate-card-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExchangeRateCardComponent } from './exchange-rate-card/exchange-rate-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { Services } from 'src/app/services/services.service';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { DecimalConvertPipe } from 'src/app/shared/pipes/decimalConvert.pipe';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
   
    HomeComponent,
    ExchangeRateCardListComponent,
    ExchangeRateCardComponent,
    FooterComponent,
    DecimalConvertPipe,
    HeaderComponent,
    LoadingComponent
    
    
      ],
  
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule
    
  ],
  exports:[],
  providers:[
    Services,
    
  ]

})
export class HomeModule { }
