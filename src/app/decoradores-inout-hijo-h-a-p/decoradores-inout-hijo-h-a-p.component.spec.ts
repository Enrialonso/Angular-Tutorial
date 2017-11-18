import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradoresInoutHijoHAPComponent } from './decoradores-inout-hijo-h-a-p.component';

describe('DecoradoresInoutHijoHAPComponent', () => {
  let component: DecoradoresInoutHijoHAPComponent;
  let fixture: ComponentFixture<DecoradoresInoutHijoHAPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradoresInoutHijoHAPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradoresInoutHijoHAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
