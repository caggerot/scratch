import { TestBed } from '@angular/core/testing';

import { NoobInterceptorService } from './noob-interceptor.service';

describe('NoobInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoobInterceptorService = TestBed.get(NoobInterceptorService);
    expect(service).toBeTruthy();
  });
});
