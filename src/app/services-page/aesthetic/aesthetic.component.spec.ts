import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AestheticComponent } from './aesthetic.component';

describe('AestheticComponent', () => {
  let component: AestheticComponent;
  let fixture: ComponentFixture<AestheticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AestheticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AestheticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
