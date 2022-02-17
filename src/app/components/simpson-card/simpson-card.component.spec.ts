import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonCardComponent } from './simpson-card.component';

describe('SimpsonCardComponent', () => {
  let component: SimpsonCardComponent;
  let fixture: ComponentFixture<SimpsonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpsonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpsonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
