import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleSquirtlePage } from './detalle-squirtle.page';

describe('DetalleSquirtlePage', () => {
  let component: DetalleSquirtlePage;
  let fixture: ComponentFixture<DetalleSquirtlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleSquirtlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
