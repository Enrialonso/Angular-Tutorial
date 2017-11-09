import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasAtributosComponent } from './directivas-atributos.component';

describe('DirectivasAtributosComponent', () => {
  let component: DirectivasAtributosComponent;
  let fixture: ComponentFixture<DirectivasAtributosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivasAtributosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivasAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
