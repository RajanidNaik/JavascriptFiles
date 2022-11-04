import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveSuperAdminComponent } from './add-remove-super-admin.component';

describe('AddRemoveSuperAdminComponent', () => {
  let component: AddRemoveSuperAdminComponent;
  let fixture: ComponentFixture<AddRemoveSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveSuperAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemoveSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
