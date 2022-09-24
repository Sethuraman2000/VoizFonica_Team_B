import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidfaqComponent } from './prepaidfaq.component';

describe('PrepaidfaqComponent', () => {
  let component: PrepaidfaqComponent;
  let fixture: ComponentFixture<PrepaidfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaidfaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepaidfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
