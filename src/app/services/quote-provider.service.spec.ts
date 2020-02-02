import { TestBed } from '@angular/core/testing';

import { QuoteProviderService } from './quote-provider.service';

describe('QuoteProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuoteProviderService = TestBed.get(QuoteProviderService);
    expect(service).toBeTruthy();
  });
});
