import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipYodaComponent } from './starship-yoda.component';

describe('StarshipYodaComponent', () => {
  let component: StarshipYodaComponent;
  let fixture: ComponentFixture<StarshipYodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipYodaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipYodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
