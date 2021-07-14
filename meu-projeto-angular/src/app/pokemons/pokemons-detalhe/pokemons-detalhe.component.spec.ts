import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsDetalheComponent } from './pokemons-detalhe.component';

describe('PokemonsDetalheComponent', () => {
  let component: PokemonsDetalheComponent;
  let fixture: ComponentFixture<PokemonsDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
