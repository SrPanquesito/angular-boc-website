import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SedationComponent } from './sedation.component';

describe('SedationComponent', () => {
  let component: SedationComponent;
  let fixture: ComponentFixture<SedationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SedationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SedationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
