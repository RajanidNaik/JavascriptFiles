import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleYodaComponent } from './vehicle-yoda.component';

describe('VehicleYodaComponent', () => {
  let component: VehicleYodaComponent;
  let fixture: ComponentFixture<VehicleYodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleYodaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleYodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
