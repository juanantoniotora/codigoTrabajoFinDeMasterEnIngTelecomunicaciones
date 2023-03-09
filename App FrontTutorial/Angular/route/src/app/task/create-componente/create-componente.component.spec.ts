import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponenteComponent } from './create-componente.component';

describe('CreateComponenteComponent', () => {
  let component: CreateComponenteComponent;
  let fixture: ComponentFixture<CreateComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
