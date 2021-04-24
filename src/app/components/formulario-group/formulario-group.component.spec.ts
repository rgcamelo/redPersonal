import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGroupComponent } from './formulario-group.component';

describe('FormularioGroupComponent', () => {
  let component: FormularioGroupComponent;
  let fixture: ComponentFixture<FormularioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
