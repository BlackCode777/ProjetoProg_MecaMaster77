import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorDashboardComponent } from './indicador-dashboard.component';

describe('IndicadorDashboardComponent', () => {
  let component: IndicadorDashboardComponent;
  let fixture: ComponentFixture<IndicadorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadorDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndicadorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
