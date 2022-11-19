import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetYodaComponent } from './planet-yoda.component';

describe('PlanetYodaComponent', () => {
  let component: PlanetYodaComponent;
  let fixture: ComponentFixture<PlanetYodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetYodaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetYodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
