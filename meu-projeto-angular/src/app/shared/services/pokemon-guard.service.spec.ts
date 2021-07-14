import { TestBed } from '@angular/core/testing';

import { PokemonGuardService } from './pokemon-guard.service';

describe('PokemonGuardService', () => {
  let service: PokemonGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
