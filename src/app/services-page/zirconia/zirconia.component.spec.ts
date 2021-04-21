import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZirconiaComponent } from './zirconia.component';

describe('ZirconiaComponent', () => {
  let component: ZirconiaComponent;
  let fixture: ComponentFixture<ZirconiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZirconiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZirconiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
