import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentHeader } from './document-header';

describe('DocumentHeader', () => {
  let component: DocumentHeader;
  let fixture: ComponentFixture<DocumentHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
