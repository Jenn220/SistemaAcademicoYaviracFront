import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAsistencia } from './registro-asistencia';

describe('RegistroAsistencia', () => {
  let component: RegistroAsistencia;
  let fixture: ComponentFixture<RegistroAsistencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAsistencia],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroAsistencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
