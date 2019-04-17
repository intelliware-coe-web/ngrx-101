import { TestBed } from '@angular/core/testing';

import { WikipediaSearchService } from './wikipedia-search.service';

describe('WikipediaSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikipediaSearchService = TestBed.get(WikipediaSearchService);
    expect(service).toBeTruthy();
  });
});
