import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDataBindingComponent } from './inicio-data-binding.component';

describe('InicioDataBindingComponent', () => {
  let component: InicioDataBindingComponent;
  let fixture: ComponentFixture<InicioDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
