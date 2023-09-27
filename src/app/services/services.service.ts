
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const APIKEY = 'RVZG0GHEV2KORLNA'
const URL = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/'

@Injectable({ providedIn: 'root' })
export class Services {


  /**
   * Construtor
   *
   * @param {HttpClient} _httpClient - Client HTTP para fazer requisições
   */
  constructor(
    private _httpClient: HttpClient
  ) { }


  getCurrentExchangeRate(symbol: string | null): Observable<any> {
    return this._httpClient.get(`${URL}currentExchangeRate?apiKey=?${APIKEY}&from_symbol=${symbol}&to_symbol=BRL`).pipe(
      tap((res) => {
        return res;
      })
    );
  }


  getDailyExchangeRate(symbol: string): Observable<any> {
    return this._httpClient.get(`${URL}dailyExchangeRate?apiKey=?${APIKEY}&from_symbol=${symbol}&to_symbol=BRL`).pipe(
      tap((res) => {
        return res;
      })
    );
  }


}
