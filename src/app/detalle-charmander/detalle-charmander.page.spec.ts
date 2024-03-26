import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleCharmanderPage } from './detalle-charmander.page';

describe('DetalleCharmanderPage', () => {
  let component: DetalleCharmanderPage;
  let fixture: ComponentFixture<DetalleCharmanderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleCharmanderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
