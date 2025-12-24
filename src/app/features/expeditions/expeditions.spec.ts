import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expeditions } from './expeditions';

describe('Expeditions', () => {
  let component: Expeditions;
  let fixture: ComponentFixture<Expeditions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expeditions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expeditions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
