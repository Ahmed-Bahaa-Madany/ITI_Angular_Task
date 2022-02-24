import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2FooterComponent } from './t2-footer.component';

describe('T2FooterComponent', () => {
  let component: T2FooterComponent;
  let fixture: ComponentFixture<T2FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
