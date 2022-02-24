import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2ContentComponent } from './t2-content.component';

describe('T2ContentComponent', () => {
  let component: T2ContentComponent;
  let fixture: ComponentFixture<T2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
