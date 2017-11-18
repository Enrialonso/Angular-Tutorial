import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradoresInoutPadreHAPComponent } from './decoradores-inout-padre-h-a-p.component';

describe('DecoradoresInoutPadreHAPComponent', () => {
  let component: DecoradoresInoutPadreHAPComponent;
  let fixture: ComponentFixture<DecoradoresInoutPadreHAPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradoresInoutPadreHAPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradoresInoutPadreHAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
