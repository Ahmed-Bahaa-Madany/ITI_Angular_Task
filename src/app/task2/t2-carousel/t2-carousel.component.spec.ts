import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2CarouselComponent } from './t2-carousel.component';

describe('T2CarouselComponent', () => {
  let component: T2CarouselComponent;
  let fixture: ComponentFixture<T2CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2CarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
