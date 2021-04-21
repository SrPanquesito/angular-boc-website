import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrofacialComponent } from './orofacial.component';

describe('OrofacialComponent', () => {
  let component: OrofacialComponent;
  let fixture: ComponentFixture<OrofacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrofacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrofacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
