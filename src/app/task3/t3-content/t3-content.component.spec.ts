import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3ContentComponent } from './t3-content.component';

describe('T3ContentComponent', () => {
  let component: T3ContentComponent;
  let fixture: ComponentFixture<T3ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
