import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHobbyCompComponent } from './add-hobby-comp.component';

describe('AddHobbyCompComponent', () => {
  let component: AddHobbyCompComponent;
  let fixture: ComponentFixture<AddHobbyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHobbyCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHobbyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
