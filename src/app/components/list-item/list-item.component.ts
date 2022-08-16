import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Course, Student } from 'src/app/types';
import { Store } from '@ngrx/store';
import { AppState } from 'src/state/app.state';
import {
  deleteCourse,
  setFocusedCourse,
} from 'src/state/courses/course.actions';
import { deleteStudent, setFocusedStudent } from 'src/state/students/student.actions';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  @Input() data: Student | Course | undefined;
  @Input() isGrey: boolean | undefined;
  @Input() isFocused: boolean | undefined;
  @Input() dataIdentifier: string | undefined | null;
  faTimes = faTimes;

  constructor(private store: Store<AppState>) {}

  setOverview() {
    if (this.dataIdentifier === 'courses') {
      this.store.dispatch(setFocusedCourse({ course: this.data as Course }));
    }
    if (this.dataIdentifier === 'students') {
      this.store.dispatch(setFocusedStudent({ student: this.data as Student }));
    }
  }

  onDelete() {
    const input = prompt(
      `Are you sure you want to delete this ${this.dataIdentifier?.slice(
        0,
        -1
      )}? Enter 'delete' to confirm`
    );

    if (input === 'delete') {
      if (this.dataIdentifier === 'courses' && this.data?.id) {
        this.store.dispatch(deleteCourse({ id: this.data.id }));
      }
      if (this.dataIdentifier === 'students' && this.data?.id) {
        this.store.dispatch(deleteStudent({ id: this.data.id }));
      }
    }
    return;
  }
}
