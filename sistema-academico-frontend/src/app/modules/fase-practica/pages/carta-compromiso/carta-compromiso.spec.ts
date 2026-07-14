import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCompromiso } from './carta-compromiso';

describe('CartaCompromiso', () => {
  let component: CartaCompromiso;
  let fixture: ComponentFixture<CartaCompromiso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaCompromiso],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaCompromiso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
