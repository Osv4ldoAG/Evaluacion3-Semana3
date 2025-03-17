import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostarCajeroComponent } from './mostar-cajero.component';

describe('MostarCajeroComponent', () => {
  let component: MostarCajeroComponent;
  let fixture: ComponentFixture<MostarCajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostarCajeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostarCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
