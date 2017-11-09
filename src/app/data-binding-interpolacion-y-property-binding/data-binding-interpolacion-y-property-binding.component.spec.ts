import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingInterpolacionYPropertyBindingComponent } from './data-binding-interpolacion-y-property-binding.component';

describe('DataBindingInterpolacionYPropertyBindingComponent', () => {
  let component: DataBindingInterpolacionYPropertyBindingComponent;
  let fixture: ComponentFixture<DataBindingInterpolacionYPropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingInterpolacionYPropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingInterpolacionYPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
