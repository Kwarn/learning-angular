import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { StudentState } from './student.reducer';

export const selectStudents = (state: AppState) => state.students;
export const selectAllStudents = createSelector(
  selectStudents,
  (state: StudentState) => state.students
);
export const selectFocusedStudent = createSelector(
  selectStudents,
  (state: StudentState) => state.focusedStudent
);
