import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalAlignersComponent } from './dental-aligners.component';

describe('SedationComponent', () => {
  let component: DentalAlignersComponent;
  let fixture: ComponentFixture<DentalAlignersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalAlignersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalAlignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
