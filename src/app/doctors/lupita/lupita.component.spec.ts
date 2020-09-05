import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LupitaComponent } from './lupita.component';

describe('LupitaComponent', () => {
  let component: LupitaComponent;
  let fixture: ComponentFixture<LupitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LupitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LupitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
