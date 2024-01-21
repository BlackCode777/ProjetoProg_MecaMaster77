import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIndicadorComponent } from './dashboard-indicador.component';

describe('DashboardIndicadorComponent', () => {
  let component: DashboardIndicadorComponent;
  let fixture: ComponentFixture<DashboardIndicadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardIndicadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
