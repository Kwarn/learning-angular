import { Component } from '@angular/core';
import { SwitchFocusedItemService } from './events-service';
import { Course, Student } from './types';
import { CourseService } from './services/course.service';
import { StudentService } from './services/student.service';

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
  courseData: Course[] = [];
  studentData: Student[] = [];

  constructor(
    public switchFocusedItemService: SwitchFocusedItemService,
    private courseService: CourseService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.courseService
      .getCourses()
      .subscribe((courses) => (this.courseData = courses));

    this.studentService
      .getStudents()
      .subscribe((students) => (this.studentData = students));

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
