import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaAtributosNgstyleComponent } from './directiva-atributos-ngstyle.component';

describe('DirectivaAtributosNgstyleComponent', () => {
  let component: DirectivaAtributosNgstyleComponent;
  let fixture: ComponentFixture<DirectivaAtributosNgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaAtributosNgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaAtributosNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
