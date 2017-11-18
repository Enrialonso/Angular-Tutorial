import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradoresInoutPadrePAHComponent } from './decoradores-inout-padre-p-a-h.component';

describe('DecoradoresInoutPadrePAHComponent', () => {
  let component: DecoradoresInoutPadrePAHComponent;
  let fixture: ComponentFixture<DecoradoresInoutPadrePAHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradoresInoutPadrePAHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradoresInoutPadrePAHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
