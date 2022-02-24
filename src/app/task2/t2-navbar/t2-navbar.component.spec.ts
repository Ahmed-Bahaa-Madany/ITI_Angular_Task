import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2NavbarComponent } from './t2-navbar.component';

describe('T2NavbarComponent', () => {
  let component: T2NavbarComponent;
  let fixture: ComponentFixture<T2NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T2NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
