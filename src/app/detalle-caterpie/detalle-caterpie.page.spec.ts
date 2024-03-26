import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DetalleCaterpiePage } from './detalle-caterpie.page';

describe('DetalleCaterpiePage', () => {
  let component: DetalleCaterpiePage;
  let fixture: ComponentFixture<DetalleCaterpiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleCaterpiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
