import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/types';

export const deleteStudent = createAction(
  '[students] Remove student',
  props<{ id: string }>()
);

export const loadStudents = createAction('[Students Page] Load Students');

export const loadStudentsSuccess = createAction(
  '[Students API] Load Students Success',
  props<{ students: Student[] }>()
);

export const loadStudentsFailure = createAction(
  '[Students API] Load Students Failure',
  props<{ error: string }>()
);

export const setFocusedStudent = createAction(
  '[Student List Item] Focus Student',
  props<{ student: Student }>()
);
