import { Component } from '@angular/core';
import { Course, ListNames, Student } from './types';
import { selectActiveList } from 'src/state/shared/shared.selectors';
import { Store } from '@ngrx/store';
import { setActiveList } from 'src/state/shared/shared.actions';
import { AppState } from 'src/state/app.state';
import { Observable } from 'rxjs';
import { loadCourses } from 'src/state/courses/course.actions';
import {
  selectAllCourses,
  selectFocusedCourse,
} from 'src/state/courses/course.selectors';
import {
  selectAllStudents,
  selectFocusedStudent,
} from 'src/state/students/student.selectors';
import { loadStudents } from 'src/state/students/student.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angluar-students-app';
  activeList: ListNames | undefined;
  listData$: Observable<Array<Course | Student>> | undefined;
  focusedStudent$: Observable<Student | undefined> =
    this.store.select(selectFocusedStudent);
  focusedCourse$: Observable<Course | undefined | null> =
    this.store.select(selectFocusedCourse);

  // deleteError$ = this.store.select()

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select(selectActiveList)
      .subscribe((listName) => (this.activeList = listName));
    this.store.dispatch(loadCourses());
    this.listData$ = this.store.select(selectAllCourses);
  }

  switchActiveList(listName: ListNames) {
    this.store.dispatch(setActiveList({ listName: listName }));
    if (listName === 'courses') {
      this.store.dispatch(loadCourses());
      this.listData$ = this.store.select(selectAllCourses);
    }
    if (listName === 'students') {
      this.store.dispatch(loadStudents());
      this.listData$ = this.store.select(selectAllStudents);
    }
  }
}
