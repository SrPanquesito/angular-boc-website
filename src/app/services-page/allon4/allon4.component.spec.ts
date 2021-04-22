import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Allon4Component } from './allon4.component';

describe('Allon4Component', () => {
  let component: Allon4Component;
  let fixture: ComponentFixture<Allon4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Allon4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Allon4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
