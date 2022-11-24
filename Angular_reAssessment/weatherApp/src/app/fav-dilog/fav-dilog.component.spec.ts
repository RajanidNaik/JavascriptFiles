import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavDilogComponent } from './fav-dilog.component';

describe('FavDilogComponent', () => {
  let component: FavDilogComponent;
  let fixture: ComponentFixture<FavDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavDilogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
