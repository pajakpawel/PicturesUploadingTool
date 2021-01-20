import { TestBed } from '@angular/core/testing';

import { NotificationModalManagementService } from './notification-modal-management.service';

describe('NotificationModalManagementService', () => {
  let service: NotificationModalManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationModalManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
