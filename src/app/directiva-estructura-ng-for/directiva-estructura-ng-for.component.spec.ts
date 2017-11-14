import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaEstructuraNgForComponent } from './directiva-estructura-ng-for.component';

describe('DirectivaEstructuraNgForComponent', () => {
  let component: DirectivaEstructuraNgForComponent;
  let fixture: ComponentFixture<DirectivaEstructuraNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaEstructuraNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaEstructuraNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
