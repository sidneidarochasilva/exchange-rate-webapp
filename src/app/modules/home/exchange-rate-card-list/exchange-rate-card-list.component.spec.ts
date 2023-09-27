import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateCardListComponent } from './exchange-rate-card-list.component';

describe('ExchangeRateCardListComponent', () => {
  let component: ExchangeRateCardListComponent;
  let fixture: ComponentFixture<ExchangeRateCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRateCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeRateCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
