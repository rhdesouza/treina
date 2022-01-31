import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIngredientesComponent } from './modal-ingredientes.component';

describe('ModalIngredientesComponent', () => {
  let component: ModalIngredientesComponent;
  let fixture: ComponentFixture<ModalIngredientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIngredientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
