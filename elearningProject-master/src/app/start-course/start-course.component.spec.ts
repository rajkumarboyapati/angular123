import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCourseComponent } from './start-course.component';

describe('StartCourseComponent', () => {
  let component: StartCourseComponent;
  let fixture: ComponentFixture<StartCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
