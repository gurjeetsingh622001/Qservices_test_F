import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdsComponent } from './post-ads.component';

describe('PostAdsComponent', () => {
  let component: PostAdsComponent;
  let fixture: ComponentFixture<PostAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
