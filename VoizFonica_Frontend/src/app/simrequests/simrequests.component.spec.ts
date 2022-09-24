import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimrequestsComponent } from './simrequests.component';

describe('SimrequestsComponent', () => {
  let component: SimrequestsComponent;
  let fixture: ComponentFixture<SimrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
