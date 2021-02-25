import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDentistryComponent } from './general-dentistry.component';

describe('GeneralDentistryComponent', () => {
  let component: GeneralDentistryComponent;
  let fixture: ComponentFixture<GeneralDentistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDentistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDentistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
