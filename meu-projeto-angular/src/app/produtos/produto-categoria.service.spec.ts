import { TestBed } from '@angular/core/testing';

import { ProdutoCategoriaService } from './produto-categoria.service';

describe('ProdutoCategoriaService', () => {
  let service: ProdutoCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
