import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicPredictionsComponent } from './magic-predictions.component';

describe('MagicPredictionsComponent', () => {
  let component: MagicPredictionsComponent;
  let fixture: ComponentFixture<MagicPredictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicPredictionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicPredictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
