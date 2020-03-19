import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { telemetricStatsNavBar } from './telemetricStatsNavBar.component';

describe('telemetricStatsNavBar', () => {
  let component: telemetricStatsNavBar;
  let fixture: ComponentFixture<telemetricStatsNavBar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ telemetricStatsNavBar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(telemetricStatsNavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
