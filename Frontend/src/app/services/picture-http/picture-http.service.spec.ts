import { TestBed } from '@angular/core/testing';

import { PictureHttpService } from './picture-http.service';

describe('PictureHttpService', () => {
  let service: PictureHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
