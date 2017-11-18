import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoredoresInputOutputComponent } from './decoredores-input-output.component';

describe('DecoredoresInputOutputComponent', () => {
  let component: DecoredoresInputOutputComponent;
  let fixture: ComponentFixture<DecoredoresInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoredoresInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoredoresInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
