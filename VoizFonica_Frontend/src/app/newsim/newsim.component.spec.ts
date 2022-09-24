import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsimComponent } from './newsim.component';

describe('NewsimComponent', () => {
  let component: NewsimComponent;
  let fixture: ComponentFixture<NewsimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
