import { Component, OnDestroy } from '@angular/core';
import { Services } from 'src/app/services/services.service';
import { Subscription,of  } from 'rxjs';
import { switchMap, catchError,tap } from 'rxjs/operators';
import { IExchangeRate } from 'src/app/interfaces/IExchangeRate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  currentExchangeRateSearch: string = '';
  exchangeRate: IExchangeRate | null = null;
  listExchangeRate: any[] = [];
  subscription: Subscription;
  loading: boolean = false;




  constructor(
    private service: Services,
  ) { this.subscription = new Subscription(); }


  search(exchangeRate: string): void {
    if (!exchangeRate) {
      return;
    }
  
    this.loading = true;
  
    this.subscription.add(
      this.service.getCurrentExchangeRate(exchangeRate).pipe(
        switchMap((resp: IExchangeRate) => {
          if (resp.success) {
            this.exchangeRate = resp;
            return this.service.getDailyExchangeRate(exchangeRate);
          } else {
            return of(null);
          }
        }),
        catchError((error: any) => {
          return of(null); 
        }),
        tap((res: any) => {
          if (res && res.success) {
            this.listExchangeRate = this.calculateDifferencePercentage(res.data);
          }
          this.loading = false;
        })
      ).subscribe()
    );
  }
  


  calculateDifferencePercentage(listExchangeRate: any[]): any[] {
    if (listExchangeRate.length >= 0) {
      for (let i = 0; i < listExchangeRate.length; i++) {
        const initialValue = listExchangeRate[i]?.close;
        const finalValue = listExchangeRate[i + 1]?.close;
        const difference = initialValue - finalValue;
        const differencePercent = (difference / initialValue) * 100;

        listExchangeRate[i].dif = Number(differencePercent.toFixed(2));
      }
    }

    return listExchangeRate
  }


  ngOnDestroy() {

    this.subscription.unsubscribe();
  }

}




