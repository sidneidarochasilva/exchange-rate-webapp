import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-exchange-rate-card-list',
  templateUrl: './exchange-rate-card-list.component.html',
  styleUrls: ['./exchange-rate-card-list.component.scss']
})
export class ExchangeRateCardListComponent implements OnInit {
  panelOpenState = false;
  @Input() listExchangeRate:any = [];
  @Input() exchangeRate: any

  ngOnInit(): void {
  }





}
