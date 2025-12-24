import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestModal } from './suggest-modal';

describe('SuggestModal', () => {
  let component: SuggestModal;
  let fixture: ComponentFixture<SuggestModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
