import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionDetails } from './expedition-details';

describe('ExpeditionDetails', () => {
  let component: ExpeditionDetails;
  let fixture: ComponentFixture<ExpeditionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpeditionDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeditionDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
