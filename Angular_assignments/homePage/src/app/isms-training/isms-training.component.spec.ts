import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsmsTrainingComponent } from './isms-training.component';

describe('IsmsTrainingComponent', () => {
  let component: IsmsTrainingComponent;
  let fixture: ComponentFixture<IsmsTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsmsTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsmsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
