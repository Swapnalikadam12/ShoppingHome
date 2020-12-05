import { TestBed, inject } from '@angular/core/testing';

import { UploadProductsService } from './upload-products.service';

describe('UploadProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadProductsService]
    });
  });

  it('should be created', inject([UploadProductsService], (service: UploadProductsService) => {
    expect(service).toBeTruthy();
  }));
});
