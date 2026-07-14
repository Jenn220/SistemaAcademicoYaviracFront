import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoDocumentos } from './catalogo-documentos';

describe('CatalogoDocumentos', () => {
  let component: CatalogoDocumentos;
  let fixture: ComponentFixture<CatalogoDocumentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoDocumentos],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoDocumentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
