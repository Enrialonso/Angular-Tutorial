import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoradoresInoutHijoPAHComponent } from './decoradores-inout-hijo-p-a-h.component';

describe('DecoradoresInoutHijoPAHComponent', () => {
  let component: DecoradoresInoutHijoPAHComponent;
  let fixture: ComponentFixture<DecoradoresInoutHijoPAHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoradoresInoutHijoPAHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoradoresInoutHijoPAHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
