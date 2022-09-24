import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonglefaqComponent } from './donglefaq.component';

describe('DonglefaqComponent', () => {
  let component: DonglefaqComponent;
  let fixture: ComponentFixture<DonglefaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonglefaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonglefaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
