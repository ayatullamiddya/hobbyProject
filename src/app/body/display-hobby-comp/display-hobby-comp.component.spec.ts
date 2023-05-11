import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHobbyCompComponent } from './display-hobby-comp.component';

describe('DisplayHobbyCompComponent', () => {
  let component: DisplayHobbyCompComponent;
  let fixture: ComponentFixture<DisplayHobbyCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHobbyCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHobbyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
