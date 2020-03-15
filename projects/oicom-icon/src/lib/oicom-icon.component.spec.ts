import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OicomIconComponent } from './oicom-icon.component';

describe('OicomIconComponent', () => {
  let component: OicomIconComponent;
  let fixture: ComponentFixture<OicomIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OicomIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OicomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
