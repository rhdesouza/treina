import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMontagemHamburguerComponent } from './modal-montagem-hamburguer.component';

describe('ModalMontagemHamburguerComponent', () => {
  let component: ModalMontagemHamburguerComponent;
  let fixture: ComponentFixture<ModalMontagemHamburguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMontagemHamburguerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMontagemHamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
