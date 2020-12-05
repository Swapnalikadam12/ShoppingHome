import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerprofileComponent } from './retailerprofile.component';

describe('RetailerprofileComponent', () => {
  let component: RetailerprofileComponent;
  let fixture: ComponentFixture<RetailerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
