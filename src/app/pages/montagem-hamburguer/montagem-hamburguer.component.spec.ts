import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontagemHamburguerComponent } from './montagem-hamburguer.component';

describe('MontagemHamburguerComponent', () => {
  let component: MontagemHamburguerComponent;
  let fixture: ComponentFixture<MontagemHamburguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontagemHamburguerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontagemHamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
