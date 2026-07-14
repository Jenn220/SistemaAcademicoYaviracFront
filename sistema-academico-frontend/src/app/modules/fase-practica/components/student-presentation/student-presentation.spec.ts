import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPresentation } from './student-presentation';

describe('StudentPresentation', () => {
  let component: StudentPresentation;
  let fixture: ComponentFixture<StudentPresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPresentation],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentPresentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
