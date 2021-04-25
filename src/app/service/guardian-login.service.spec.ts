import { TestBed } from '@angular/core/testing';

import { GuardianLoginService } from './guardian-login.service';

describe('GuardianLoginService', () => {
  let service: GuardianLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardianLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
