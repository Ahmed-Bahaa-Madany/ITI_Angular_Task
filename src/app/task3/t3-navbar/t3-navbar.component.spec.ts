import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3NavbarComponent } from './t3-navbar.component';

describe('T3NavbarComponent', () => {
  let component: T3NavbarComponent;
  let fixture: ComponentFixture<T3NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T3NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
