import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3TodoComponent } from './t3-todo.component';

describe('T3TodoComponent', () => {
  let component: T3TodoComponent;
  let fixture: ComponentFixture<T3TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T3TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
