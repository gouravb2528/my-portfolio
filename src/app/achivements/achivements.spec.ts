import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Achivements } from './achivements';

describe('Achivements', () => {
  let component: Achivements;
  let fixture: ComponentFixture<Achivements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Achivements],
    }).compileComponents();

    fixture = TestBed.createComponent(Achivements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
