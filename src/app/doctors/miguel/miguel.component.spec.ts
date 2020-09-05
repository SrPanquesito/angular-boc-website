import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiguelComponent } from './miguel.component';

describe('MiguelComponent', () => {
  let component: MiguelComponent;
  let fixture: ComponentFixture<MiguelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiguelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
