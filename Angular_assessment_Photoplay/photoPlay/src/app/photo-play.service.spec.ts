import { TestBed } from '@angular/core/testing';

import { PhotoPlayService } from './photo-play.service';

describe('PhotoPlayService', () => {
  let service: PhotoPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
