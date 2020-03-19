import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowLognonDialogComponent } from './window-lognon-dialog.component';

describe('WindowLognonDialogComponent', () => {
  let component: WindowLognonDialogComponent;
  let fixture: ComponentFixture<WindowLognonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowLognonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowLognonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
