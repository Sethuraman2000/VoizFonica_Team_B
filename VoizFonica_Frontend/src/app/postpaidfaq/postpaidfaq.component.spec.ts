import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidfaqComponent } from './postpaidfaq.component';

describe('PostpaidfaqComponent', () => {
  let component: PostpaidfaqComponent;
  let fixture: ComponentFixture<PostpaidfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpaidfaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostpaidfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
