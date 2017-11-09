import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDirectivasComponent } from './inicio-directivas.component';

describe('InicioDirectivasComponent', () => {
  let component: InicioDirectivasComponent;
  let fixture: ComponentFixture<InicioDirectivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioDirectivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
