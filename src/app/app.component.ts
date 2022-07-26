import { Component } from '@angular/core';
import { SwitchFocusedItemService } from './events-service';
import { Course, Student } from './interfaces';
import { MOCK_COURSES } from './mock-courses';
import { MOCK_STUDENTS } from './mock-students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angluar-students-app';
  activeList: 'students' | 'courses' = 'courses';
  focusedCourseItem: Course | null = null;
  focusedStudentItem: Student | null = null;
  focusIdentifier: string | null = null;

  studentData: Student[] = MOCK_STUDENTS;
  courseData: Course[] = MOCK_COURSES;

  constructor(public switchFocusedItemService: SwitchFocusedItemService) {}

  ngOnInit() {
    this.switchFocusedItemService.message$.subscribe((name) => {
      if (this.activeList === 'students') {
        const foundStudent = this.studentData.filter(
          (student) => student.name === name
        )[0];
        if (foundStudent) {
          this.focusedStudentItem = foundStudent;
          this.focusIdentifier = foundStudent.name;
        }
      }
      if (this.activeList === 'courses') {
        const foundCourse = this.courseData.filter(
          (course) => course.name === name
        )[0];
        if (foundCourse) {
          this.focusedCourseItem = foundCourse;
          this.focusIdentifier = foundCourse.name;
        }
      }
    });
  }
  switchActiveList(ListName: 'students' | 'courses') {
    this.activeList = ListName;
  }
}
