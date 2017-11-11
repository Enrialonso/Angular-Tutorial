import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaAtributoNgclassComponent } from './directiva-atributo-ngclass.component';

describe('DirectivaAtributoNgclassComponent', () => {
  let component: DirectivaAtributoNgclassComponent;
  let fixture: ComponentFixture<DirectivaAtributoNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaAtributoNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaAtributoNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
