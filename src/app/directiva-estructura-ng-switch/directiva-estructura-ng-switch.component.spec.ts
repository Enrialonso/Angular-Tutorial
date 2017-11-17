import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaEstructuraNgSwitchComponent } from './directiva-estructura-ng-switch.component';

describe('DirectivaEstructuraNgSwitchComponent', () => {
  let component: DirectivaEstructuraNgSwitchComponent;
  let fixture: ComponentFixture<DirectivaEstructuraNgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaEstructuraNgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaEstructuraNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
