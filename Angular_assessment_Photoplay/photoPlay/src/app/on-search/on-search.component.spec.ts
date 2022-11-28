import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSearchComponent } from './on-search.component';

describe('OnSearchComponent', () => {
  let component: OnSearchComponent;
  let fixture: ComponentFixture<OnSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
