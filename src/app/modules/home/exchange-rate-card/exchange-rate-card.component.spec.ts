import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateCardComponent } from './exchange-rate-card.component';

describe('ExchangeRateCardComponent', () => {
  let component: ExchangeRateCardComponent;
  let fixture: ComponentFixture<ExchangeRateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeRateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
