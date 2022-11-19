import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesYodaComponent } from './species-yoda.component';

describe('SpeciesYodaComponent', () => {
  let component: SpeciesYodaComponent;
  let fixture: ComponentFixture<SpeciesYodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesYodaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeciesYodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
