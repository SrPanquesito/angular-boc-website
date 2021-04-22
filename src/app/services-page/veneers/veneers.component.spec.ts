import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeneersComponent } from './veneers.component';

describe('VeneersComponent', () => {
  let component: VeneersComponent;
  let fixture: ComponentFixture<VeneersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeneersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeneersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
