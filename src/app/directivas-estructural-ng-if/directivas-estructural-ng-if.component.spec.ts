import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasEstructuralNgIfComponent } from './directivas-estructural-ng-if.component';

describe('DirectivasEstructuralNgIfComponent', () => {
  let component: DirectivasEstructuralNgIfComponent;
  let fixture: ComponentFixture<DirectivasEstructuralNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivasEstructuralNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivasEstructuralNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
