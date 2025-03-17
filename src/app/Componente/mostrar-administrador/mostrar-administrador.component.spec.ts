import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAdministradorComponent } from './mostrar-administrador.component';

describe('MostrarAdministradorComponent', () => {
  let component: MostrarAdministradorComponent;
  let fixture: ComponentFixture<MostrarAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarAdministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
