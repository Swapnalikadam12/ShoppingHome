import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterretailerComponent } from './registerretailer.component';

describe('RegisterretailerComponent', () => {
  let component: RegisterretailerComponent;
  let fixture: ComponentFixture<RegisterretailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterretailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
