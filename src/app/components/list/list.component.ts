import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student, Course } from 'src/app/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Output() setOverviewCb = new EventEmitter();
  @Input() listData: Array<Student | Course> | null = null;
  @Input() focusIdentifier: string | null = null;

  isCourse(data: any): data is Course {
    return data.includes(data);
  }
  isStudent(data: any): data is Student {
    return data.includes(data);
  }

  dataIdentifier: 'course' | 'student' | null = this.isCourse(this.listData)
    ? 'course'
    : this.isStudent(this.listData)
    ? 'student'
    : null;

  constructor() {}

  onDelete(id: string | undefined) {
    if (!id) return; // handle error

    switch (this.dataIdentifier) {
      case 'student':
        //something
        break;
      case 'course':
        // const res = this.courseService.deleteCourse(this.data?.id).subscribe();
        break;
      default:
        return;
    }
  }

  ngOnInit(): void {}
}


/* 
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
  } */