import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BikeService } from './bike.service';

describe('BikeService', () => {
  let service: BikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(BikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
