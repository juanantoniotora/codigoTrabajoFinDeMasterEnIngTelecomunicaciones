import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerComponenteFormularioLoginComponent } from './primer-componente-formulario-login.component';

describe('PrimerComponenteFormularioLoginComponent', () => {
  let component: PrimerComponenteFormularioLoginComponent;
  let fixture: ComponentFixture<PrimerComponenteFormularioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerComponenteFormularioLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerComponenteFormularioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
