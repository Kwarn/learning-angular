import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student, Course, ListNames } from 'src/app/types';
import { AppState } from 'src/state/app.state';
import { loadCourses } from 'src/state/courses/course.actions';
import { selectAllCourses } from 'src/state/courses/course.selectors';
import { selectActiveList } from 'src/state/shared/shared.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  @Output() setOverviewCb = new EventEmitter();
  @Input() focusIdentifier: string | null = null;

  listData$: Observable<Array<Student | Course>> | undefined;
  activeList: ListNames | undefined;
  console = console;

  ngOnInit() {
    this.store
      .select(selectActiveList)
      .subscribe((event) => (this.activeList = event));

    if (this.activeList === 'courses') {
      this.store.dispatch(loadCourses());
      this.listData$ = this.store.select(selectAllCourses);
    }
  }

  onDelete(id: string | undefined) {
    if (!id) return; // handle error

    switch (this.activeList) {
      case 'students':
        //something
        break;
      case 'courses':
        // const res = this.courseService.deleteCourse(this.data?.id).subscribe();
        break;
      default:
        return;
    }
  }
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
