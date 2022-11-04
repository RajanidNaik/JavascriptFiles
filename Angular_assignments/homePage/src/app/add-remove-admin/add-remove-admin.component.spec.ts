import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveAdminComponent } from './add-remove-admin.component';

describe('AddRemoveAdminComponent', () => {
  let component: AddRemoveAdminComponent;
  let fixture: ComponentFixture<AddRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
