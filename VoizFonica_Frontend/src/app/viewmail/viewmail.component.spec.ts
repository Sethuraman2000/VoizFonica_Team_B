import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmailComponent } from './viewmail.component';

describe('ViewmailComponent', () => {
  let component: ViewmailComponent;
  let fixture: ComponentFixture<ViewmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
