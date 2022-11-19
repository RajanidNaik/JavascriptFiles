import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmYodaComponent } from './film-yoda.component';

describe('FilmYodaComponent', () => {
  let component: FilmYodaComponent;
  let fixture: ComponentFixture<FilmYodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmYodaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmYodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
