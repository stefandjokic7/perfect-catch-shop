import { TestBed } from '@angular/core/testing';

import { BaseModal } from './base-modal';

describe('BaseModal', () => {
  let service: BaseModal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseModal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
